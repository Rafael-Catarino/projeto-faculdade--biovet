const container_cadastro = document.querySelector(".container_cadastro");
const inputName = document.querySelector("#nome");
const inputCPF = document.querySelector("#cpf");
const inputEmail = document.querySelector("#email");
const inputCellPhone = document.querySelector("#celular");
const inputTelephone = document.querySelector("#telefone");
const inputRua = document.querySelector("#rua");
const inputN = document.querySelector("#number");
const inputCEP = document.querySelector("#cep");
const inputBairro = document.querySelector("#bairro");
const inputpayment = document.querySelector(".payment")
const inputData = document.querySelector("#data");
const inputDescription = document.querySelector("#description");


const checkCPF = () => {
  if (inputCPF.value.length != 11 && inputCPF.value.length != 14){
    alert("Informe um CPF ou CNPJ valido.");
  }
} 

const checkCellPhone = () => {
  if (inputCellPhone.value.length != 9){
    alert("Informe um celular valido.");
  }
}

const checkTelephone = () => {
  if (inputTelephone.value.length != 8){
    alert("Informe um telefone valido.");
  }
}

const checkCEP = () => {
  if (inputCEP.value.length != 8){
    alert("Informe um CEP valido.");
  }
}




container_cadastro.addEventListener("submit", (event)=>{
  event.preventDefault();
  checkCPF();
  checkCellPhone();
  checkTelephone();
  checkCEP()
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
    Data: inputData.value,
    Descricao: inputDescription.value
  }
  console.log(client);
})