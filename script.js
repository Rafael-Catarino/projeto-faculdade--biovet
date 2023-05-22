const containerCadastro = document.querySelector(".container_cadastro");
const inputName = document.querySelector("#name");
const inputCPF = document.querySelector("#cpf");
const inputEmail = document.querySelector("#email");
const inputCellPhone = document.querySelector("#cellPhone");
const inputTelephone = document.querySelector("#telephone");
const inputRoad = document.querySelector("#road");
const inputN = document.querySelector("#number");
const inputCEP = document.querySelector("#cep");
const inputBairro = document.querySelector("#bairro");
const inputPayment = document.querySelectorAll(".payment");
const inputServico = document.querySelectorAll(".servico");
const inputData = document.querySelector("#data");
const inputDescription = document.querySelector("#description");

const getInputRadio = () => {
  for (let i = 0; i < inputPayment.length; i++) {
    if (inputPayment[i].checked == true) {
      return inputPayment[i].value;
    }
  }
};

const getInputCheckbox = () => {
  let servicos = [];
  for (let i = 0; i < inputServico.length; i++) {
    if (inputServico[i].checked == true) {
      servicos.push(inputServico[i].value);
    }
  }
  return servicos;
};

const checkCPF = () => {};

const checkCellPhone = () => {};

const checkTelephone = () => {};

const checkCEP = () => {};

inputCPF.addEventListener("keypress", () => {
  let inputCEPLength = inputCPF.value.length;
  if (inputCEPLength === 3 || inputCEPLength === 7) {
    inputCPF.value += ".";
  } else if (inputCEPLength === 11) {
    inputCPF.value += "-";
  }
});

inputCellPhone.addEventListener("keypress", () => {
  let inputCellPhoneLength = inputCellPhone.value.length;
  if (inputCellPhoneLength === 0) {
    inputCellPhone.value += "(";
  } else if (inputCellPhoneLength === 3) {
    inputCellPhone.value += ") ";
  } else if (inputCellPhoneLength === 10) {
    inputCellPhone.value += ".";
  }
});

inputTelephone.addEventListener("keypress", () => {
  let inputTelephoneLength = inputTelephone.value.length;
  if (inputTelephoneLength === 0) {
    inputTelephone.value += "(";
  } else if (inputTelephoneLength === 3) {
    inputTelephone.value += ") ";
  } else if (inputTelephoneLength === 9) {
    inputTelephone.value += ".";
  }
});

inputCEP.addEventListener("keypress", () => {
  let inputCEPLength = inputCEP.value.length;
  if (inputCEPLength === 5) {
    inputCEP.value += " - ";
  }
});

const printClient = (client) => {
  console.log(client);
};

containerCadastro.addEventListener("submit", (event) => {
  event.preventDefault();
  let client = {
    Nome: inputName.value.toUpperCase(),
    CPF: inputCPF.value,
    Email: inputEmail.value,
    Celular: inputCellPhone.value,
    Telefone: inputTelephone.value,
    Rua: inputRoad.value,
    Numero: inputN.value,
    CEP: inputCEP.value,
    Bairro: inputBairro.value,
    Pagamento: getInputRadio(),
    Servico: getInputCheckbox(),
    Data: inputData.value,
    Descricao: inputDescription.value,
  };
  printClient(client);
});
