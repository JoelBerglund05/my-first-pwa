class Main{

    constructor(){
        this.btn = document.getElementById("btn");
        this.value = document.getElementById("value");
        this.message = document.getElementById("message");
    }
    RegisterServiceWorker() {
        if('serviceWorker' in navigator) {
            navigator.serviceWorker.register('./js/ServiceWorker.js').then((reg) => {
               console.log('Registration succeeded. Scope is ' + reg.scope);
            });
        }
    }

    button(){
        
        this.btn.addEventListener("click", () => {
            this.message.innerHTML = this.value.value;
            this.value.value = "";
        });
    }
        
}


const main = new Main();
main.RegisterServiceWorker();
main.button();