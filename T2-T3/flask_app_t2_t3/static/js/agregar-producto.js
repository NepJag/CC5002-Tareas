// --- Get input and button elements ---
const tipoProductoSelect = document.getElementById('tipo-prod');
const productosSelect = document.getElementById('prod');
const descTextArea = document.getElementById('desc');
const fotosFiles = document.getElementById('foto');
const regionSelect = document.getElementById('region');
const comunaSelect = document.getElementById('comuna');
const nombreTextBox = document.getElementById('nombre');
const emailTextBox = document.getElementById('email');
const celTextBox = document.getElementById('cel');

// --- Conditional dropdown menus ---

// Populate the regiones 
fetch('/reg-com')
  .then(response => response.json())
  .then(data => {
    reg_com = data;
    reg_com['regiones'].forEach((region_i) => {
      const option = document.createElement('option');
      option.value = region_i['region'];
      option.innerText = region_i['region'];
      regionSelect.append(option);
    });
  });

// Populate the frutas and verduras
let frut_ver;
fetch('/frut-ver')
  .then(response => response.json())
  .then(data => {
    frut_ver = data;
  })
  .catch(error => {
    console.error('Error:', error);
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
    const comunasRegion = reg_com['regiones'].find(region => region.region === regionSelect.value).comunas;
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

// Has to upload at least 1 and maximum 3 fotos de productos (includes mandatory validation)
const validatePics = () => {
  const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
  const files = Array.from(fotosFiles.files);
  
  // Check if all files are of allowed types
  const isValidType = files.every(file => allowedTypes.includes(file.type));
  
  // Check if number of files is within the allowed range
  const isValidNumber = files.length >= 1 && files.length <= 3;
  
  return isValidType && isValidNumber;
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

  if (!validatePics()) {
    isValid = false;
    errorMessage += "Por favor, sube imágenes de tu(s) producto(s) (1 mínimo, 3 máximo).\n";
    fotosFiles.style.borderColor = "red";
  } else {
    fotosFiles.style.borderColor = "";
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
      // Handle form submission
      document.getElementById("agr-prod-form").submit()
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