const reg_com = {
    "regiones": [
        {
            "region": "Región de Arica y Parinacota",
            "comunas": ["Arica", "Camarones", "Putre", "General Lagos"]
        },
        {
            "region": "Región de Tarapacá",
            "comunas": ["Iquique", "Alto Hospicio", "Pozo Almonte", "Camiña", "Colchane", "Huara", "Pica"]
        },
        {
            "region": "Región de Antofagasta",
            "comunas": ["Antofagasta", "Mejillones", "Sierra Gorda", "Taltal", "Calama", "Ollagüe", "San Pedro de Atacama", "Tocopilla", "María Elena"]
        },
        {
            "region": "Región de Atacama",
            "comunas": ["Copiapó", "Caldera", "Tierra Amarilla", "Chañaral", "Diego de Almagro", "Vallenar", "Alto del Carmen", "Freirina", "Huasco"]
        },
        {
            "region": "Región de Coquimbo",
            "comunas": ["La Serena", "Coquimbo", "Andacollo", "La Higuera", "Paiguano", "Vicuña", "Illapel", "Canela", "Los Vilos", "Salamanca", "Ovalle", "Combarbalá", "Monte Patria", "Punitaqui", "Río Hurtado"]
        },
        {
            "region": "Región de Valparaíso",
            "comunas": ["Valparaíso", "Casablanca", "Concón", "Juan Fernández", "Puchuncaví", "Quintero", "Viña del Mar", "Isla de Pascua", "Los Andes", "Calle Larga", "Rinconada", "San Esteban", "La Ligua", "Cabildo", "Papudo", "Petorca", "Zapallar", "Quillota", "Calera", "Hijuelas", "La Cruz", "Nogales", "San Antonio", "Algarrobo", "Cartagena", "El Quisco", "El Tabo", "Santo Domingo", "San Felipe", "Catemu", "Llaillay", "Panquehue", "Putaendo", "Santa María", "Quilpué", "Limache", "Olmué", "Villa Alemana"]
        },
        {
          "region": "Región Metropolitana de Santiago",
          "comunas": ["Cerrillos", "Cerro Navia", "Conchalí", "El Bosque", "Estación Central", "Huechuraba", "Independencia", "La Cisterna", "La Florida", "La Granja", "La Pintana", "La Reina", "Las Condes", "Lo Barnechea", "Lo Espejo", "Lo Prado", "Macul", "Maipú", "Ñuñoa", "Pedro Aguirre Cerda", "Peñalolén", "Providencia", "Pudahuel", "Quilicura", "Quinta Normal", "Recoleta", "Renca", "Santiago", "San Joaquín", "San Miguel", "San Ramón", "Vitacura", "Puente Alto", "Pirque", "San José de Maipo", "Colina", "Lampa", "Tiltil", "San Bernardo", "Buin", "Calera de Tango", "Paine", "Melipilla", "Alhué", "Curacaví", "María Pinto", "San Pedro", "Talagante", "El Monte", "Isla de Maipo", "Padre Hurtado", "Peñaflor"]
        },
        {
            "region": "Región del Libertador Gral. Bernardo O’Higgins",
            "comunas": ["Rancagua", "Codegua", "Coinco", "Coltauco", "Doñihue", "Graneros", "Las Cabras", "Machalí", "Malloa", "Mostazal", "Olivar", "Peumo", "Pichidegua", "Quinta de Tilcoco", "Rengo", "Requínoa", "San Vicente", "Pichilemu", "La Estrella", "Litueche", "Marchihue", "Navidad", "Paredones", "San Fernando", "Chépica", "Chimbarongo", "Lolol", "Nancagua", "Palmilla", "Peralillo", "Placilla", "Pumanque", "Santa Cruz"]
        },
        {
            "region": "Región del Maule",
            "comunas": ["Talca", "Constitución", "Curepto", "Empedrado", "Maule", "Pelarco", "Pencahue", "Río Claro", "San Clemente", "San Rafael", "Cauquenes", "Chanco", "Pelluhue", "Curicó", "Hualañé", "Licantén", "Molina", "Rauco", "Romeral", "Sagrada Familia", "Teno", "Vichuquén", "Linares", "Colbún", "Longaví", "Parral", "Retiro", "San Javier", "Villa Alegre", "Yerbas Buenas"]
        },
        {
            "region": "Región de Ñuble",
            "comunas": ["Cobquecura", "Coelemu", "Ninhue", "Portezuelo", "Quirihue", "Ránquil", "Treguaco", "Bulnes", "Chillán Viejo", "Chillán", "El Carmen", "Pemuco", "Pinto", "Quillón", "San Ignacio", "Yungay", "Coihueco", "Ñiquén", "San Carlos", "San Fabián", "San Nicolás"]
        },
        {
            "region": "Región del Biobío",
            "comunas": ["Concepción", "Coronel", "Chiguayante", "Florida", "Hualqui", "Lota", "Penco", "San Pedro de la Paz", "Santa Juana", "Talcahuano", "Tomé", "Hualpén", "Lebu", "Arauco", "Cañete", "Contulmo", "Curanilahue", "Los Álamos", "Tirúa", "Los Ángeles", "Antuco", "Cabrero", "Laja", "Mulchén", "Nacimiento", "Negrete", "Quilaco", "Quilleco", "San Rosendo", "Santa Bárbara", "Tucapel", "Yumbel", "Alto Biobío"]
        },
        {
            "region": "Región de la Araucanía",
            "comunas": ["Temuco", "Carahue", "Cunco", "Curarrehue", "Freire", "Galvarino", "Gorbea", "Lautaro", "Loncoche", "Melipeuco", "Nueva Imperial", "Padre las Casas", "Perquenco", "Pitrufquén", "Pucón", "Saavedra", "Teodoro Schmidt", "Toltén", "Vilcún", "Villarrica", "Cholchol", "Angol", "Collipulli", "Curacautín", "Ercilla", "Lonquimay", "Los Sauces", "Lumaco", "Purén", "Renaico", "Traiguén", "Victoria"]
        },
        {
            "region": "Región de Los Ríos",
            "comunas": ["Valdivia", "Corral", "Lanco", "Los Lagos", "Máfil", "Mariquina", "Paillaco", "Panguipulli", "La Unión", "Futrono", "Lago Ranco", "Río Bueno"]
        },
        {
            "region": "Región de Los Lagos",
            "comunas": ["Puerto Montt", "Calbuco", "Cochamó", "Fresia", "Frutillar", "Los Muermos", "Llanquihue", "Maullín", "Puerto Varas", "Castro", "Ancud", "Chonchi", "Curaco de Vélez", "Dalcahue", "Puqueldón", "Queilén", "Quellón", "Quemchi", "Quinchao", "Osorno", "Puerto Octay", "Purranque", "Puyehue", "Río Negro", "San Juan de la Costa", "San Pablo", "Chaitén", "Futaleufú", "Hualaihué", "Palena"]
        },
        {
            "region": "Región Aysén del Gral. Carlos Ibáñez del Campo",
            "comunas": ["Coihaique", "Lago Verde", "Aisén", "Cisnes", "Guaitecas", "Cochrane", "O’Higgins", "Tortel", "Chile Chico", "Río Ibáñez"]
        },
        {
            "region": "Región de Magallanes y de la Antártica Chilena",
            "comunas": ["Punta Arenas", "Laguna Blanca", "Río Verde", "San Gregorio", "Cabo de Hornos (Ex Navarino)", "Antártica", "Porvenir", "Primavera", "Timaukel", "Natales", "Torres del Paine"]
        }
    ]
  };
  
  const frut_ver = {
    "fruta": [
      "Arándano",
      "Frambuesa",
      "Frutilla",
      "Grosella",
      "Mora",
      "Limón",
      "Mandarina",
      "Naranja",
      "Pomelo",
      "Melón",
      "Sandía",
      "Palta",
      "Chirimoya",
      "Coco",
      "Dátil",
      "Kiwi",
      "Mango",
      "Papaya",
      "Piña",
      "Plátano",
      "Damasco",
      "Cereza",
      "Ciruela",
      "Higo",
      "Kaki",
      "Manzana",
      "Durazno",
      "Nectarin",
      "Níspero",
      "Pera",
      "Uva",
      "Almendra",
      "Avellana",
      "Maní",
      "Castaña",
      "Nuez",
      "Pistacho"
    ],
    "verdura": [
      "Brócoli",
      "Repollo",
      "Coliflor",
      "Rábano",
      "Alcachofa",
      "Lechuga",
      "Zapallo",
      "Pepino",
      "Haba",
      "Maíz",
      "Champiñón",
      "Acelga",
      "Apio",
      "Espinaca",
      "Perejil",
      "Ajo",
      "Cebolla",
      "Espárrago",
      "Puerro",
      "Acelga",
      "Espinaca",
      "Remolacha",
      "Berenjena",
      "Papa",
      "Pimiento",
      "Tomate",
      "Zanahoria"
    ]
  };
  
  // --- Get input and button elements ---
  
  const tipoProductoSelect = document.getElementById('tipo-prod');
  const productosSelect = document.getElementById('prod');
  const descTextArea = document.getElementById('desc');
  const regionSelect = document.getElementById('region');
  const comunaSelect = document.getElementById('comuna');
  const nombreTextBox = document.getElementById('nombre');
  const emailTextBox = document.getElementById('email');
  const celTextBox = document.getElementById('cel');
  
  // --- Conditional dropdown menus ---
  
  // Populate the regiones 
  reg_com['regiones'].forEach((region_i) => {
    const option = document.createElement('option');
    option.value = reg_com['regiones'].indexOf(region_i);
    option.innerText = region_i['region'];
    regionSelect.append(option);
  });
  
  // Populate the product options based on the selected product type
  tipoProductoSelect.addEventListener('change', () => {
    // Clear the existing product options
    while (productosSelect.options.length > 0) {
      productosSelect.remove(0);
    }
    // Populate the product options based on the selected product type
    if (tipoProductoSelect.value === 'fruta') {
      frut_ver['fruta'].forEach((fruta) => {
        const option = document.createElement('option');
        option.value = fruta;
        option.innerText = fruta;
        productosSelect.append(option);
      });
    } else if (tipoProductoSelect.value === 'verdura') {
      frut_ver['verdura'].forEach((verdura) => {
        const option = document.createElement('option');
        option.value = verdura;
        option.innerText = verdura;
        productosSelect.append(option);
      });
    };
  });
  
  // Populate the comunas options based on the selected region
  regionSelect.addEventListener('change', () => {
    // Clear the existing comuna options
    while (comunaSelect.options.length > 0) {
      comunaSelect.remove(0);
    }
  
    // Default for comuna
    const defaultOpt = document.createElement('option');
    defaultOpt.value = "";
    defaultOpt.innerText = "Seleccione una comuna";
    comunaSelect.append(defaultOpt);
  
    // Populate the product options based on the selected product type
    if (regionSelect.value != "") { // If its on the default, we can't search for comunas
      const comunasRegion = reg_com['regiones'][regionSelect.value]['comunas'];
      comunasRegion.forEach((comuna_i) => {
        const option = document.createElement('option');
        option.value = comuna_i;
        option.innerText = comuna_i;
        comunaSelect.append(option);
      });
    }
  });
  
  // --- Validation Functions ---
  
  // Has to select an option: fruta/verdura
  const validateTipoProd = tipoProd => tipoProd != "";
  
  // Has to select at least 1 and maximum 5 productos (includes mandatory validation)
  const validateProds = () => {
    const length = productosSelect.selectedOptions.length;
    return length >= 1 && length <= 5;
  };
  
  // Has to select a region
  const validateRegion = region => region != "";
  
  // Has to select a comuna
  const validateComuna = comuna => comuna != "";
  
  // Name has to have a length of at least 3 and maximum 80 (includes mandatory validation)
  const validateNombre = nombre => nombre.length >= 3 && nombre.length <= 80 && nombre;
  
  // Email has to be on email format (includes mandatory validation)
  const validateEmail = email => {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email) && email;
  };
  
  // Celular has to be on celphone format
  const validateCelular = cel => {
    const celRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;
    return celRegex.test(cel) || !cel;
  };
  
  
  // --- Form Handling ---
  
  const handleFormSubmit = () => {
  
    let isValid = true;
    let errorMessage = "";
  
    // Validate inputs
    if (!validateTipoProd(tipoProductoSelect.value)) {
      isValid = false;
      errorMessage += "Por favor, elige un tipo de producto: Fruta/Verdura.\n";
      tipoProductoSelect.style.borderColor = "red";
    } else {
      tipoProductoSelect.style.borderColor = "";
    }
  
    if (!validateProds()) {
      isValid = false;
      errorMessage += "Por favor, elige tu(s) producto(s) (1 mínimo, 5 máximo).\n";
      productosSelect.style.borderColor = "red";
    } else {
      productosSelect.style.borderColor = "";
    }
  
    if (!validateRegion(regionSelect.value)) {
      isValid = false;
      errorMessage += "Por favor, indica la región de procedencia.\n";
      regionSelect.style.borderColor = "red";
    } else {
      regionSelect.style.borderColor = "";
    }
  
    if (!validateComuna(comunaSelect.value)) {
      isValid = false;
      errorMessage += "Por favor, indica la comuna de procedencia.\n";
      comunaSelect.style.borderColor = "red";
    } else {
      comunaSelect.style.borderColor = "";
    }
  
    if (!validateNombre(nombreTextBox.value)) {
      isValid = false;
      errorMessage += "Por favor, indica tu nombre (3 caracteres mínimo, 80 máximo).\n";
      nombreTextBox.style.borderColor = "red";
    } else {
      nombreTextBox.style.borderColor = "";
    }
  
    if (!validateEmail(emailTextBox.value)) {
      isValid = false;
      errorMessage += "Por favor, ingresa una dirección de email válida.\n";
      emailTextBox.style.borderColor = "red";
    } else {
      emailTextBox.style.borderColor = "";
    }
  
    if (!validateCelular(celTextBox.value)) {
      isValid = false;
      errorMessage += "Por favor, ingresa un número celular válido.\n";
      celTextBox.style.borderColor = "red";
    } else {
      celTextBox.style.borderColor = "";
    }
  
    // Handle errors or redirect to confessions page
    if (!isValid) {
      alert(errorMessage);
    } else {
      // Show the confirmation dialog
      const confirmationDialog = document.getElementById('confirmation-dialog');
      confirmationDialog.style.visibility = 'visible';

      // Add event listeners for the confirmation buttons
      const confirmYesButton = document.getElementById('confirm-yes');
      const confirmNoButton = document.getElementById('confirm-no');

      const handleConfirmYes = () => {
        // Handle successful form submission
        alert('Hemos recibido el registro de producto. Muchas gracias.');
        window.location.href = 'index.html';
      };

      const handleConfirmNo = () => {
        // Keep the form visible, the user doesn't want to confirm the product registration
        confirmationDialog.style.visibility = 'hidden';
        confirmYesButton.removeEventListener('click', handleConfirmYes);
        confirmNoButton.removeEventListener('click', handleConfirmNo);
      };

      confirmYesButton.addEventListener('click', handleConfirmYes);
      confirmNoButton.addEventListener('click', handleConfirmNo);
    }
  };
  
  // --- Event Listener ---
  
  const submitButton = document.getElementById("agr-prod");
  submitButton.addEventListener("click", handleFormSubmit);