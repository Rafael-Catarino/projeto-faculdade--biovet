const containerCadastro = document.querySelector(".container_cadastro");
const inputName = document.querySelector("#nome");
const inputCPF = document.querySelector("#cpf");
const inputEmail = document.querySelector("#email");
const inputCellPhone = document.querySelector("#celular");
const inputTelephone = document.querySelector("#telefone");
const inputRua = document.querySelector("#rua");
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

const checkCPF = () => { };

const checkCellPhone = () => { };

const checkTelephone = () => { };

const checkCEP = () => { };

inputCPF.addEventListener("keypress", () => {
  let inputCEPLength = inputCPF.value.length;
  if(inputCEPLength === 3) {
    console.log("foi")
    inputCPF.value += ".";
  }
  if(inputCEPLength === 7) {
    console.log("foi")
    inputCPF.value += ".";
  }
  if(inputCEPLength === 11) {
    inputCPF.value += "-";
  }
});


containerCadastro.addEventListener("submit", (event) => {
  event.preventDefault();
  let client = {
    Nome: inputName.value.toUpperCase(),
    CPF: inputCPF.value,
    Email: inputEmail.value,
    Celular: inputCellPhone.value,
    Telefone: inputTelephone.value,
    Rua: inputRua.value,
    Numero: inputN.value,
    CEP: inputCEP.value,
    Bairro: inputBairro.value,
    Pagamento: getInputRadio(),
    Servico: getInputCheckbox(),
    Data: inputData.value,
    Descricao: inputDescription.value,
  };
  console.log(client);
});
