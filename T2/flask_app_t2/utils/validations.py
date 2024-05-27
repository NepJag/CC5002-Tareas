from db import db
import re, filetype

def validateTipoProd(tipoProd):
    return tipoProd != "" and tipoProd in ["fruta", "verdura"]

def validateProds(prods):
    length = len(prods)
    valid_prods = [tup[1] for tup in db.get_frut_ver()]
    return length >= 1 and length <= 5 and all([prod in valid_prods for prod in prods])

def validatePics(pics):
    length = len(pics)
    ALLOWED_EXTENSIONS = {"png", "jpg", "jpeg", "gif"}
    ALLOWED_MIMETYPES = {"image/jpeg", "image/png", "image/gif"}

    isValid = True
    for pic in pics:
        # check if pic is empty
        if pic.filename == "":
            isValid = False
        # check file extension
        ftype_guess = filetype.guess(pic)
        print(ftype_guess, ftype_guess.extension, ftype_guess.mime)
        if ftype_guess.extension not in ALLOWED_EXTENSIONS:
            isValid = False
        # check file mimetype
        if ftype_guess.mime not in ALLOWED_MIMETYPES:
            isValid = False
    return length >= 1 and length <= 3 and isValid

def validateRegion(region):
    # check if region is in ((1, 'Región de Tarapacá', 'Camiña'), (1, 'Región de Tarapacá', 'Huara'), ...)
    valid_reg_com = db.get_reg_com()
    return region in [region[1] for region in valid_reg_com] and region != ""

def validateComuna(comuna):
    valid_reg_com = db.get_reg_com()
    return comuna != "" and comuna in [comuna[2] for comuna in valid_reg_com]

def validateNombre(nombre):
    length = len(nombre)
    return length >= 3 and length <= 80 and nombre

def validateEmail(email):
    emailRegex = r'^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$'
    return re.match(emailRegex, email) and email

def validateCelular(celular):
    celularRegex = r'^\+(?:[0-9] ?){6,14}[0-9]$'
    return re.match(celularRegex, celular) or not celular
