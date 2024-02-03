let humanImgChoice = document.querySelector('.humanImgChoice')
let IA_choice = document.querySelector('.IA_choice')
let loading_img = document.querySelector('.loading_img')
let arrayImgPath = ['images/ciseau.png', 'images/papier.png', 'images/pierre.png']

let humanScore_dom = document.getElementById('humanScore')
let IA_Score_dom = document.getElementById('IA_Score')

let notification = document.getElementById('notification')

let winNumber = 1

do{
    winNumber = prompt('Le premier arriver à combien gagne ? (entre 1 et 10)')
    
}while (winNumber == "" || winNumber == null || winNumber > 10 || winNumber < 1 || isNaN(parseInt(winNumber)));

function showHumanChoice(src, value){
    
    humanImgChoice.setAttribute('src', src)
    humanImgChoice.setAttribute('value', value)

    loading_img.style.display = "inherit";
    
    processGame()

}

function processGame() {
    setTimeout(() => {

        let humanImgChoice2 = humanImgChoice.getAttribute('value')        

        loading_img.style.display = "none";

        let random_int = Math.floor(Math.random() * 3)
    
        let random_path = arrayImgPath[random_int]
    
        IA_choice.setAttribute('src', random_path) 

        let status

        switch(humanImgChoice2) {

            case 'ciseau':
                if(random_path == "images/ciseau.png"){
                    console.log('NUL')
                    status = 0
                    showMessage(status)
                }
                else if(random_path == "images/papier.png"){
                    humanScore_dom.innerHTML = parseInt(humanScore_dom.innerHTML) + 1
                    console.log('Gagné')
                    status = 1
                    showMessage(status)
                    checkWinner()
                }else{
                    IA_Score_dom.innerHTML = parseInt(IA_Score_dom.innerHTML) + 1
                    console.log('Perdu')
                    status = -1
                    showMessage(status)
                    checkWinner()
                }
                break;
    
            case 'papier':
                if(random_path == "images/ciseau.png"){
                    IA_Score_dom.innerHTML = parseInt(IA_Score_dom.innerHTML) + 1
                    console.log('Perdu')
                    status = -1
                    showMessage(status)
                    checkWinner()
                }
                else if(random_path == "images/papier.png"){
                    console.log('NUL')
                    status = 0
                    showMessage(status)                
                }else{
                    humanScore_dom.innerHTML = parseInt(humanScore_dom.innerHTML) + 1
                    console.log('Gagnéra')
                    status = 1
                    showMessage(status)
                    checkWinner()
                }
                break;
                
            default:
                if(random_path == "images/ciseau.png"){
                    humanScore_dom.innerHTML = parseInt(humanScore_dom.innerHTML) + 1
                    console.log('Gagné')
                    status = 1
                    showMessage(status)
                    checkWinner()
                }
                else if(random_path == "images/papier.png"){
                    IA_Score_dom.innerHTML = parseInt(IA_Score_dom.innerHTML) + 1
                    console.log('Perdu')
                    status = -1
                    showMessage(status)
                    checkWinner()
                }else{
                    console.log('Nul')
                    status = 0
                    showMessage(status)
                }
        } 

    }, 1000)

    setTimeout(() => {

        humanImgChoice.setAttribute('src', '')

        IA_choice.setAttribute('src', '')

        notification.setAttribute('class', "")

    }, 2500)  

}

function showMessage(status) {
    if (status == 1){
        notification.setAttribute('class', "show")
        notification.innerHTML = "Vous avez gagné !"
        notification.style.backgroundColor = "green"
        notification.style.color = "#fff" 
    }
    else if(status == -1){
        notification.setAttribute('class', "show")
        notification.innerHTML = "Vous avez perdu !"
        notification.style.backgroundColor = "red"
        notification.style.color = "#fff" 
    }
    else{
        notification.setAttribute('class', "show")
        notification.innerHTML = "Nul !"
        notification.style.backgroundColor = "orange"
        notification.style.color = "#fff" 
    }
}

function checkWinner(){

    if(parseInt(humanScore_dom.innerHTML) == winNumber) {
        console.log('Human Win 2401')
        $('#myModal').css('display', 'block');
        $('#myModal').css('background', 'rgba(19, 18, 18, 0.7)');
        $('.imgWinner').attr('src', 'images/human.jpeg')
        $('.msgWinner').text('Vous avez gagné !')
    }

    if(parseInt(IA_Score_dom.innerHTML) == winNumber){
        console.log('IA WIN 0124')
        $('#myModal').css('display', 'block');
        $('#myModal').css('background', 'rgba(19, 18, 18, 0.7)');
        $('.imgWinner').attr('src', 'images/ia.jpg')
        $('.msgWinner').text('Victoire de l\'IA!')
    }

}

