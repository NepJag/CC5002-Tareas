from flask import Flask, request, render_template, redirect, url_for, session
from flask import flash, get_flashed_messages
from PIL import Image
from utils.validations import *
from db import db
from werkzeug.utils import secure_filename
import hashlib
import filetype
import os
from datetime import datetime
import json

UPLOAD_FOLDER = 'static/uploads'

app = Flask(__name__)

app.secret_key = "s3cr3t_k3y"

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
app.config['MAX_CONTENT_LENGTH'] = 16 * 1000 * 1000 # 16 MB

@app.errorhandler(413)
def request_entity_too_large(error):
    return 'File exceeds the maximum file size allowed', 413

@app.route("/", methods=["GET"])
def index():
    return render_template("index.html")

@app.route("/agregar-producto", methods=["GET", "POST"])
def agregarProducto():
    if request.method == "POST":
        # 1. get data from form
        tipoProd = request.form.get("tipo-prod")
        prods = request.form.getlist("prod")
        desc = request.form.get("desc")
        pics = request.files.getlist("foto")
        region = request.form.get("region")
        comuna = request.form.get("comuna")
        nombre = request.form.get("nombre")
        email = request.form.get("email")
        celular = request.form.get("cel")
        print(f"{tipoProd}\n{prods}\n{desc}\n{pics}\n{region}\n{comuna}\n{nombre}\n{email}\n{celular}")
        # print(request.form)

        # 2. validate data
        if not validateTipoProd(tipoProd):
            flash("Tipo de producto inválido", "danger")
            return redirect(url_for("agregarProducto"))
        if not validateProds(prods):
            flash("Productos inválidos", "danger")
            return redirect(url_for("agregarProducto"))
        if not validatePics(pics):
            flash("Fotos inválidas", "danger")
            return redirect(url_for("agregarProducto"))
        if not validateRegion(region):
            flash("Región inválida", "danger")
            return redirect(url_for("agregarProducto"))
        if not validateComuna(comuna):
            flash("Comuna inválida", "danger")
            return redirect(url_for("agregarProducto"))
        if not validateNombre(nombre):
            flash("Nombre inválido", "danger")
            return redirect(url_for("agregarProducto"))
        if not validateEmail(email):
            flash("Email inválido", "danger")
            return redirect(url_for("agregarProducto"))
        if not validateCelular(celular):
            flash("Celular inválido", "danger")
            return redirect(url_for("agregarProducto"))

        # 3. save data in db: producto, producto_verdura_fruta, foto
        # E.g.:insert into producto (tipo, descripcion, comuna_id, 
        #                       nombre_productor, email_productor, 
        #                       celular_productor) values 
        # ('fruta', 'mejores productos desde María Pinto a su casa', 130602, 'Juan Urdemales', 'juan@urdemales.cl', '+56987654321');
        id_comuna = [tup[3] for tup in db.get_reg_com() if tup[2] == comuna and tup[1] == region][0]

        # 1. save data in db: producto
        last_prod_id = db.create_prod(tipoProd, desc, id_comuna, nombre, email, celular)
        print(last_prod_id)

        # 2. generate name for each pic with datetime
        now = datetime.now()
        dt_string = now.strftime("%Y%m%d%H%M%S")
        sizes = [(120, 120), (640, 480), (1280, 1024)]
        for pic in pics:
            filename = secure_filename(pic.filename.split(".")[0])
            extension = filetype.guess(pic).extension

            # 3. save pic in uploads folder
            path = os.path.abspath(app.config['UPLOAD_FOLDER'])
            pic.save(os.path.join(path, f"{dt_string}_{filename}.{extension}"))

            # 4. save different sizes of pic
            for size in sizes:
                with Image.open(os.path.join(path, f"{dt_string}_{filename}.{extension}")) as img:
                    resized_img = img.resize(size)
                    resized_img.save(os.path.join(path, f"{dt_string}_{filename}_{size[0]}x{size[1]}.{extension}"))

            # 5. save data in db: foto
            db.create_foto(os.path.join(path, f"{dt_string}_{filename}.{extension}"), f"{dt_string}_{filename}.{extension}", last_prod_id)
                
        # 6. save data in db: producto_verdura_fruta
        for prod in prods:
            db.create_prod_frutver(last_prod_id, [tup[0] for tup in db.get_frut_ver() if tup[1] == prod][0])

        flash("Producto añadido!", "success")

        return redirect(url_for("index"))
    elif request.method == "GET":
        return render_template("agregar-producto.html")

@app.route("/reg-com", methods=["GET"])
def regCom():
    # Wanted format for json_data
    # json_data = { "regiones": [ { "region": "Región de Arica y Parinacota", "comunas": ["Arica", "Camarones", "Putre", "General Lagos"]} ]}

    data = db.get_reg_com()
    # print(data)
    json_data = {}

    for reg_com in data:
        region = reg_com[1]
        comuna = reg_com[2]
        if region not in json_data:
            json_data[region] = []
        json_data[region].append(comuna)

    json_data2 = {"regiones": []}

    for region in json_data:
        json_data2["regiones"].append({"region": region, "comunas": json_data[region]})
    # print(json.dumps(json_data2))
    return json.dumps(json_data2)

@app.route("/frut-ver", methods=["GET"])
def frutVer():
    # Wanted format for json_data
    # json_data = { "fruta": [...], "verdura": [...]}

    data = db.get_frut_ver()

    json_data = {"fruta": [], "verdura": []}

    for frut_ver in data:
        tipo = frut_ver[0]
        if 1 <= tipo <= 37:
            json_data["fruta"].append(frut_ver[1])
        else:
            json_data["verdura"].append(frut_ver[1])

    # print(json.dumps(json_data))
    return json.dumps(json_data)

@app.route("/agregar-pedido", methods=["GET", "POST"])
def agregarPedido():
    if request.method == "POST":
        # 1. get data from form
        tipoProd = request.form.get("tipo-prod")
        prods = request.form.getlist("prod")
        desc = request.form.get("desc")
        region = request.form.get("region")
        comuna = request.form.get("comuna")
        nombre = request.form.get("nombre")
        email = request.form.get("email")
        celular = request.form.get("cel")
        print(f"{tipoProd}\n{prods}\n{desc}\n{region}\n{comuna}\n{nombre}\n{email}\n{celular}")
        # print(request.form)

        # 2. validate data
        if not validateTipoProd(tipoProd):
            flash("Tipo de producto inválido", "danger")
            return redirect(url_for("agregarPedido"))
        if not validateProds(prods):
            flash("Productos inválidos", "danger")
            return redirect(url_for("agregarPedido"))
        if not validateRegion(region):
            flash("Región inválida", "danger")
            return redirect(url_for("agregarPedido"))
        if not validateComuna(comuna):
            flash("Comuna inválida", "danger")
            return redirect(url_for("agregarPedido"))
        if not validateNombre(nombre):
            flash("Nombre inválido", "danger")
            return redirect(url_for("agregarPedido"))
        if not validateEmail(email):
            flash("Email inválido", "danger")
            return redirect(url_for("agregarPedido"))
        if not validateCelular(celular):
            flash("Celular inválido", "danger")
            return redirect(url_for("agregarPedido"))

        # 3. save data in db: pedido, pedido_verdura_fruta
        # E.g.:insert into pedido (tipo, descripcion, comuna_id, 
        #                       nombre_comprador, email_comprador, 
        #                       celular_comprador) values 
        # ('fruta', 'mandelo a mi casa', 130602, 'Juan Urdemales', 'juan@urdemales.cl', '+56987654321');
        id_comuna = [tup[3] for tup in db.get_reg_com() if tup[2] == comuna and tup[1] == region][0]

        # 1. save data in db: pedido
        last_pedido_id = db.create_pedido(tipoProd, desc, id_comuna, nombre, email, celular)
        # print(last_pedido_id)
                
        # 2. save data in db: pedido_verdura_fruta
        for prod in prods:
            db.create_ped_frutver([tup[0] for tup in db.get_frut_ver() if tup[1] == prod][0], last_pedido_id)

        flash("Pedido añadido!", "success")

        return redirect(url_for("index"))
    elif request.method == "GET":
        return render_template("agregar-pedido.html")

@app.route("/ver-productos", methods=["GET"])
def verProductos():
    # Data from db
    per_page = 5
    total_pages = db.get_prods_amt()[0] // per_page + (1 if db.get_prods_amt()[0] % per_page != 0 else 0)
    page = request.args.get('page', default=1, type=int)

    # Validate page
    if page < 1:
        return redirect(url_for("verProductos", page=1))
    elif page > total_pages:
        return redirect(url_for("verProductos", page=total_pages))

    data_prods = db.get_prods_n(page)
    data_reg, data_com = [], []
    data_fotos = []
    data_prod_tipo = []
    for prod in data_prods:
        data_reg.append(db.get_reg_com_by_id(prod[3])[0])
        data_com.append(db.get_reg_com_by_id(prod[3])[1])
        data_fotos.append(db.get_fotos(prod[0])[1])
        data_prod_tipo.append(", ".join([item[0] for item in db.get_prod_tipo(prod[0])[:3]]) + ("" if len(db.get_prod_tipo(prod[0])) <= 3 else ", ..."))

    return render_template("ver-productos.html", data_prods=data_prods, data_prod_tipo=data_prod_tipo, 
                           data_reg=data_reg, data_com=data_com, data_fotos=data_fotos, page=page, total_pages=total_pages)

@app.route("/ver-pedidos")
def verPedidos():
    # Data from db
    per_page = 5
    total_pages = db.get_pedidos_amt()[0] // per_page + (1 if db.get_pedidos_amt()[0] % per_page != 0 else 0)
    page = request.args.get('page', default=1, type=int)

    # Validate page
    if page < 1:
        return redirect(url_for("verPedidos", page=1))
    elif page > total_pages:
        return redirect(url_for("verPedidos", page=total_pages))

    data_pedidos = db.get_pedidos_n(page)
    data_reg, data_com = [], []
    data_ped_tipo = []
    for pedido in data_pedidos:
        data_reg.append(db.get_reg_com_by_id(pedido[3])[0])
        data_com.append(db.get_reg_com_by_id(pedido[3])[1])
        data_ped_tipo.append(", ".join([item[0] for item in db.get_ped_tipo(pedido[0])[:3]]) + ("" if len(db.get_ped_tipo(pedido[0])) <= 3 else ", ..."))
    return render_template("ver-pedidos.html", data_pedidos=data_pedidos, data_ped_tipo=data_ped_tipo,
                           data_reg=data_reg, data_com=data_com, page=page, total_pages=total_pages)

@app.route("/info-producto/<int:id>", methods=["GET"])
def infoProducto(id):
    # Data from db
    data_prod = db.get_prod_by_id(id)
    data_reg = db.get_reg_com_by_id(data_prod[2])[0]
    data_com = db.get_reg_com_by_id(data_prod[2])[1]
    data_fotos = db.get_fotos(id)[1]    
    data_prod_tipo = ", ".join([item[0] for item in db.get_prod_tipo(id)])
    print(data_prod, data_reg, data_com, data_fotos, data_prod_tipo)

    return render_template("informacion-producto.html", data_prod=data_prod, data_reg=data_reg, data_com=data_com, data_fotos=data_fotos, data_prod_tipo=data_prod_tipo)

@app.route("/info-pedido")
def infoPedido():
    return render_template("informacion-pedido.html")

if __name__ == "__main__":
    app.run(debug=True)