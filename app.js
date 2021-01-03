let myWindow;
function Modal(titre, texte, label){
    this.titre = titre;
    this.texte = texte;
    this.label = label;

    this.ajoutTitre = function(){
        let h1 = document.getElementById("title");
        h1.innerHTML = this.titre;
    }

    this.ajoutParagraph = function() {
        let paragraph = document.getElementById("paragraph");
        paragraph.innerHTML = this.texte;
    }

    this.ajoutLabel = function(){
        let label = document.getElementById("label1");
        label.innerHTML = this.label;
    }

    this.ajoutModal = function () {
        let window = document.getElementById("window");
        window.style.display = "block";
    }

    this.open = function (){
        document.getElementById("ok").addEventListener("click", function (){
            let features = "menuba=no, scrollbars=yes, width=500, height=500, status=no, toolbar=no";
            myWindow = window.open("https://www.wwe.com/", '', features)
        })
    }

    this.closeModal = function (id){
        document.getElementById(id).addEventListener("click", function (){
            let window = document.getElementById("window");
            window.style.display = "none";
            document.body.style.backgroundColor = "white";
        })
    }
    this.close = function () {
        document.getElementById("closeWindow").addEventListener("click", function () {
            myWindow.close();
        })
    }
}

let modal1 = new Modal("Fenetre Modal WWE", "Voulez vous accédez au site de la WWE?<br>\n" + "Click 'OK' pour y accéder.", "Acceptez de suivre l'aventure ?")
modal1.ajoutLabel();
modal1.ajoutParagraph();
modal1.ajoutTitre();
modal1.ajoutModal();
modal1.closeModal("close");
new modal1.closeModal("cancel");
modal1.open();
modal1.close();