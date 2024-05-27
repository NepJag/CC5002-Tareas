import pymysql
import json

DB_NAME = "tarea2"
DB_USERNAME = "cc5002"
DB_PASSWORD = "programacionweb"
DB_HOST = "localhost"
DB_PORT = 3306
DB_CHARSET = "utf8"

with open('db/queries.json', 'r') as querys:
    QUERY_DICT = json.load(querys)

# -- conn ---

def get_conn():
    conn = pymysql.connect(
        db=DB_NAME,
        user=DB_USERNAME,
        passwd=DB_PASSWORD,
        host=DB_HOST,
        port=DB_PORT,
        charset=DB_CHARSET
    )
    return conn

def get_prods_n(nPage):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_prods_n"], ((nPage-1)*5, nPage*5))
    user = cursor.fetchall()
    return user

def get_prods_amt():
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_prods_amt"])
    user = cursor.fetchone()
    return user

def get_prod_by_id(id_prod):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_prod_id"], (id_prod,))
    user = cursor.fetchone()
    return user
    
def get_prod_tipo(id_prod):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_prod_tipo"], (id_prod,))
    user = cursor.fetchall()
    return user

def get_fotos(id_prod):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_fotos"], (id_prod,))
    user = cursor.fetchone()
    return user

def get_reg_com():
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_reg_com"])
    user = cursor.fetchall()
    return user

def get_reg_com_by_id(id_comuna):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_reg_com_id"], (id_comuna,))
    user = cursor.fetchone()
    return user

def get_frut_ver():
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["get_frut_ver"])
    user = cursor.fetchall()
    return user

def create_prod(tipo, descripcion, 
                comuna_id, nombre_productor, 
                email_productor, celular_productor):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["create_prod"], (tipo, descripcion,
                                               comuna_id, nombre_productor, 
                                               email_productor, celular_productor))
    conn.commit()
    cursor.execute(QUERY_DICT["get_last_prod_id"])
    user = cursor.fetchone()
    return user

def create_prod_frutver(producto_id, tipo_verdura_fruta_id):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["create_prod_frutver"], (producto_id, tipo_verdura_fruta_id))
    conn.commit()

def create_foto(ruta_archivo, nombre_archivo, producto_id):
    conn = get_conn()
    cursor = conn.cursor()
    cursor.execute(QUERY_DICT["create_foto"], (ruta_archivo, nombre_archivo, producto_id))
    conn.commit()
    

# # -- db-related functions --

# def register_user(username, password, email):
#     # 1. check the email is not in use
#     _email_user = get_user_by_email(email)
#     if _email_user is not None:
#         return False, "El correo ya esta en uso."
#     # 2. check the username is not in use
#     _username_user = get_user_by_username(username)
#     if _username_user is not None:
#         return False, "El nombre de usuario esta en uso."
#     # 3. create user
#     create_user(username, password, email)
#     return True, None

# def login_user(username, password):
#     a_user = get_user_by_username(username)
#     if a_user is None:
#         return False, "Usuario o contraseña incorrectos."

#     a_user_passwd = a_user[3]
#     if a_user_passwd != password:
#         return False, "Usuario o contraseña incorrectos."
#     return True, None

