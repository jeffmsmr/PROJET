const mailInput = document.getElementById("EmailInput");
const passwordInput = document.getElementById("PasswordInput");
const btnSignin = document.getElementById("btnSignin");

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
 // ici il faudra appeler l'API pour vérifier les credentials en BDD

    if(mailInput.value == "admin@gmail.com" && passwordInput.value == "123"){
        // ici il faudra recuperer le vrai token
        const token = "fhdsjhfjdhfuidhsfiuhdufhsdjfhsdljfhjkdshfjs";
        setToken(token);

        // placer ce token en cookie
        setCookie(RoleCookieName, "admin", 7);
        window.location.replace("/");
        }
    else{
        mailInput.classList.add("is-invalid");
        passwordInput.classList.add("is-invalid");
    }
}