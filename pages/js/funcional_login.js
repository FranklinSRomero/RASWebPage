export function translateForm(e) {
        
    const $signUpButton = document.getElementById("signUp"),
    $singInButton = document.getElementById("signIn"),
    $container = document.getElementById("container-authuser"),
    $singInButtonMovile = document.getElementById("SingInMovile"),
    $signUpButtonMovile = document.getElementById("SingUpMovile");
   
    
    document.addEventListener("click", (e) => {
    
        /*  Side buttons Event */
    
        if (e.target == $signUpButton) {
    
           $container.classList.add("right-panel-active");
        }
    
        if (e.target == $singInButton) {
            $container.classList.remove("right-panel-active");
        }

        if (e.target == $signUpButtonMovile) {
            $container.classList.remove("right-panel-movile-active");
        }

        if (e.target == $singInButtonMovile) {
            $container.classList.add("right-panel-movile-active");
        }
    });
    
}

export default function Funcional_login() {

    return (
        <>
          <p>Don´t have access</p>
        </>
      );
}

