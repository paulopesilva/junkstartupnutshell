var audio = new Audio('assets/sentmessage.mp3');
var contactString = "<div class='social'> <a target='_blank' href='tel:+5587996224962'> <div class='socialItem' id='call'><img class='socialItemI' src='imagens/phone.svg'/><label class='number'>087996224962</label></div> </a> <a href='mailto:startupnutshell@yahoo.com'> <div class='socialItem'><img class='socialItemI' src='imagens/gmail.svg' alt=''></div> </a> <a target='_blank' href='https://www.facebook.com/startup.nutshell'> <div class='socialItem'><img class='socialItemI' src='imagens/facebook.svg' alt=''></div> </a> <a target='_blank' href='https://wa.me/+5587996224962'> <div class='socialItem'><img class='socialItemI' src='imagens/whatsapp.svg' alt=''></div> </a> <a target='_blank' href='https://paulopesilva.github.io/startupnutshell/'> <div class='socialItem'><img class='socialItemI' src='imagens/www.svg' alt=''></div> </a> <a target='_blank' href='https://www.instagram.com/startup.nutshell'> <div class='socialItem'><img class='socialItemI' src='imagens/instagram.svg' alt=''> </div> </a> <a href='https://www.linkedin.com/in/paulo-lopes-da-silva-74936469' target='_blank' rel='noopener noreferrer'> <div class='socialItem'><img class='socialItemI' src='imagens/linkedin.svg' alt=''></div> </a> </div>";
var resumeString = "<img src='imagens/resumo.png' class='resumeThumbnail'><div class='downloadSpace'><div class='pdfname'><img src='imagens/pdf.png'><label>CV.pdf</label></div><a href='assets/CV.pdf' download='CV.pdf'><img class='download' src='imagens/downloadIcon.svg'></a></div>";
var addressString = "<div class='mapview'><iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15827.135235456026!2d-37.188821350000005!3d-7.37810995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7a8acf242681493%3A0xd8dd4a28e5e0ad1d!2sItapetim%2C%20PE%2C%2056720-000!5e0!3m2!1spt-BR!2sbr!4v1675004994406!5m2!1spt-BR!2sb' class='map'></iframe></div><label class='add'><address>Sertão de Pernambuco<br> (Ventre Imortal da Poesia)<br>Itapetim, centro - 56720-000</address>";
function startFunction() {
    setLastSeen();
    waitAndResponce("intro");
}

function setLastSeen() {
    var date = new Date();
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "visto pela última vez: " + date.getHours() + ":" + date.getMinutes()
}


function closeFullDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}

function openFullScreenDP() {
    var x = document.getElementById("fullScreenDP");
    if (x.style.display === 'flex') {
        x.style.display = 'none';
    } else {
        x.style.display = 'flex';
    }
}


function isEnter(event) {
    if (event.keyCode == 13) {
        sendMsg();
    }
}

function sendMsg() {
    var input = document.getElementById("inputMSG");
    var ti = input.value;
    if (input.value == "") {
        return;
    }
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "sent");
    greendiv.setAttribute("class", "green");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = input.value;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    setTimeout(function () { waitAndResponce(ti) }, 1500);
    input.value = "";
    playSound();
}

function waitAndResponce(inputText) {
    var lastSeen = document.getElementById("lastseen");
    lastSeen.innerText = "typing...";
    switch (inputText.toLowerCase().trim()) {
        case "intro":
            setTimeout(() => {
                sendTextMessage("Olá 👋🏻,<br><br>Meu nome é <span class='bold'><a class='alink'>Paulo Lopes da Silva</a>.</span><br><br>Sou professor e fundador da StartUp NutShell <span class='bold'> (aplicações tecnológicas e inovações educacionais) 👨🏻‍💻📚</span><br><br> Sou, também, pesquisador com formação em Física teórica e experimental. Mestrado e doutorado em Física Nuclear e Astrofísica 👨🏻‍💻📚 O meu interesse atual é nas aplicações físicas e sua interface com a Internet das Coisas (IoT), machine learning e automação residencial para casas inteligentes.<br><br>digite, por favor, <span class='bold'>'help'</span> para mais informações sobre oos nossos cursos e acesso às nossas mídias sociais.<br>");
            }, 2000);
            break;
        case "Help":
            sendTextMessage("<span class='sk'> Digite uma palavra-chave sobre um tema...<br>e.g<br><span class='bold'>'habilidades'</span> - para minhas atividades técnicas<br><span class='bold'>'curriculo'</span> - para acessar meu histórico profissional<br><span class='bold'>'educação'</span> - para mais detalhes da minha formação técnica<br><span class='bold'>'endereço'</span> - para visualizar nossa localização<br><span class='bold'>'contato'</span> - para acessar nosso contato<br><span class='bold'>'projetos'</span> - para visualizar alguns projetos<br><span class='bold'>'limpar'</span> - para recomeçar/voltar menu<br><span class='bold'>'sobre'</span> - para mais informações do nosso blog</span>");
            break;
        case "Curriculo":
            sendTextMessage(resumeString);
            break;
        case "Habilidades":
            sendTextMessage("<span class='sk'> Desenvolvo, atualmente, pesquisa na área de internet das coisas com aplicações em automação residencial e casas inteligentes.<br><br> Aplicações técnicas da física com integração à eletronica e à computação :<br><span class='bold'>Java<br>C++<br>C<br>PHP<br>Git<br>\LaTex<br>Python<br>CSS<br>HTML</span><br><br>Tenho, também, experiência com :<span class='bold'><br>Android<br>DOS<br>Linux");
            break;

        case "Educação":
            sendTextMessage("Possuo bacharelado, mestrado e doutorado em Física aplicada à pesquisa básica.<br>Graduação em Física: 1996<br><br>1998: mestrado em Física Nuclear<br>PhD. em Física:2002");
            break;

        case "Endereço":
            sendTextMessage(addressString);
            break;
        case "Limpar":
            clearChat();
            break;
        case "Sobre":
            sendTextMessage("🛠️💻 Acesse nossa página para download dos portfólios dos nossos cursos!<br><br>👨🏻‍💻 ");
            break;
        case "Contato":
            sendTextMessage(contactString);
            break;
        case "Projetos":
            sendTextMessage("veja vídeos de alguns dos nossos projetos no nosso canal e mídias sociais");
            break;
        case "New":
            sendTextMessage(addressString);
            break;
        default:
            setTimeout(() => {
                sendTextMessage("Oi! Não consegui falar contigo agora...😢<br>enviar 'help' novamente para acessar nosso catálogo.");
            }, 2000);
            break;
    }



}

function clearChat() {
    document.getElementById("listUL").innerHTML = "";
    waitAndResponce('intro');
}



function sendTextMessage(textToSend) {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.setAttribute("id", "sentlabel");
    dateLabel.id = "sentlabel";
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    greendiv.innerHTML = textToSend;
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}


function sendResponse() {
    setTimeout(setLastSeen, 1000);
    var date = new Date();
    var myLI = document.createElement("li");
    var myDiv = document.createElement("div");
    var greendiv = document.createElement("div");
    var dateLabel = document.createElement("label");
    dateLabel.innerText = date.getHours() + ":" + date.getMinutes();
    myDiv.setAttribute("class", "received");
    greendiv.setAttribute("class", "grey");
    dateLabel.setAttribute("class", "dateLabel");
    greendiv.innerText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ";
    myDiv.appendChild(greendiv);
    myLI.appendChild(myDiv);
    greendiv.appendChild(dateLabel);
    document.getElementById("listUL").appendChild(myLI);
    var s = document.getElementById("chatting");
    s.scrollTop = s.scrollHeight;
    playSound();
}

function playSound() {
    audio.play();
}
