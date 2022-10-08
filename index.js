function popupEmail(){
    //emailCardFlag will indicate if a popup is already on the screen
    function checkDeleteButton(event){
        if (event.target.classList.contains("deleteButton")){
            this.remove();
            emailCardFlag= !emailCardFlag;
        }
    }
    function addDeleteButton(elem){
        let deleteButton= document.createElement("button");

        deleteButton.style.display= "flex";
        deleteButton.style.justifyContent= "center";
        deleteButton.style.alignItems= "center";
        deleteButton.textContent="X";

        deleteButton.classList.add("deleteButton");
        elem.addEventListener('click',checkDeleteButton);

        elem.prepend(deleteButton);

        deleteButton.style.position= 'absolute';
        deleteButton.style.height= "15px";
        deleteButton.style.width= "15px";
        deleteButton.style.right= "5px";
        deleteButton.style.top= "5px";
    }
    function showEmailCard(event){
        if(emailCardFlag) {
            return;
        }
        let emailCard= document.createElement('div');
    
        emailCard.textContent= 'I will implement emails from this site soon, this is just a test :)';
        emailCard.classList.add('infoCard');

        document.body.append(emailCard);

        emailCard.style.position= 'fixed';
        emailCard.style.marginLeft= "50%";
        emailCard.style.marginBottom= "50%";
        emailCard.style.transform= "translate(-50%)";

        addDeleteButton(emailCard);
        emailCardFlag= !emailCardFlag;
    }

    let emailCardFlag= false;
    let emailButton= document.getElementById('emailButton');
    emailButton.addEventListener('click', showEmailCard);
}

popupEmail();