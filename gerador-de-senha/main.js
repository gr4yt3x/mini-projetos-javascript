let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("button");

let sizePassword = document.querySelector("#valor");
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789"
let novaSenha = "";

/* pega o valor(tamanho) da senha */
sizePassword.innerHTML = sliderElement.value;


slider.oninput = function(){
    sizePassword.innerHTML = this.value;
}

function generatePassword(){
    let pass = "";

    for(let i = 0, n = charset.length; i < sliderElement.value; ++i ){
        pass += charset.charAt(Math.floor(Math.random() * n))
    }
    password.innerHTML = pass;
    /*remove a classe hide, tornando a div container-password visivel novamente */
    containerPassword.classList.remove("hide");
    novaSenha = pass;
}

function copyPassword(){
    alert("senha copiada com sucesso!")
    
    /*copia o texto da variavel enviada como parametro*/
    navigator.clipboard.writeText(novaSenha)
}