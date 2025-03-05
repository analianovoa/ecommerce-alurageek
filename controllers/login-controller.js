const form = document.querySelector("[data-form]");

form.addEventListener("submit" , (evento) => {
    evento.preventDefault();
    const email = document.querySelector("[data-email]").value;
    const paswword = document.querySelector("[data-password]").value;

    if (email.length > 6 && paswword.length > 6 ) {
        window.location.href = "http://../productos.html" ;

    }else {
        alert ("Por favor ingrese mas de 6 caracteres en email y contraseña");
    }
}

);
