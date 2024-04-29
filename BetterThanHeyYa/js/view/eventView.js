function processEvent() {

    var clap1 = document.getElementById("clap")

    if (clap1 != null){
        clap1.remove();
    }

  /* function flipCard(card) {
    card.classList.toggle('flipped');
  } */

  const container = document.getElementById("mainDiv");
  container.innerHTML = ""; //removes the previous elements
container.innerHTML =   `
<audio id="sounds" loop= "false" volume = "60">
    <source src="resources/allright.mp3" id="A" type="audio/wav">
    <source src="resources/heyYah.mp3" id="S" type="audio/wav">
  </audio> 


<div class="container">
<!-- Adicionando 12 cartões -->
<div class="row">
    <!-- Cartão 1 -->
    <div class="col-md-4">
        <div class="card" onclick="this.classList.toggle('rotate')">
            <div class="card-front">
                <p>Shaved hair pop princess</p>
            </div>
            <div class="card-back">
                <img src="/resources/britney-spears.jpeg" alt="Back of Card" class="img-fluid">
            </div>
        </div>
    </div>
    <!-- Cartão 2 -->
    <div class="col-md-4">
        <div class="card" onclick="this.classList.toggle('rotate')">
            <div class="card-front">
                <p>The Governator</p>
            </div>
            <div class="card-back">
                <img src="resources/schwarz.jpeg" alt="Back of Card" class="img-fluid">
            </div>
        </div>
    </div>
    <!-- Cartão 3 -->
    <div class="col-md-4">
        <div class="card" onclick="this.classList.toggle('rotate')">
            <div class="card-front">
                <p>The twins</p>
            </div>
            <div class="card-back">
                <img src="resources/tt.jpeg" alt="Back of Card" class="img-fluid">
            </div>
        </div>
    </div>
</div>
<div class="row">
    <!-- Cartão 4 -->
    <div class="col-md-4">
        <div class="card" onclick="this.classList.toggle('rotate')">
            <div class="card-front">
                <p>Bye-bye Russian freedom</p>
            </div>
            <div class="card-back">
                <img src="resources/putin.jpeg" alt="Back of Card" class="img-fluid">
            </div>
        </div>
    </div>
    <!-- Cartão 5 -->
    <div class="col-md-4">
        <div class="card" onclick="this.classList.toggle('rotate')">
            <div class="card-front">
                <p>King of pop balcony baby</p>
            </div>
            <div class="card-back">
                <img src="resources/mj.jpeg" alt="Back of Card" class="img-fluid">
            </div>
        </div>
    </div>
    <!-- Cartão 6 -->
    <div class="col-md-4">
        <div class="card" onclick="this.classList.toggle('rotate')">
            <div class="card-front">
                <p>Earthquake and tsunami Ronaldo Shirt</p>
            </div>
            <div class="card-back">
                <img src="resources/Martunis.jpeg" alt="Back of Card" class="img-fluid">
            </div>
        </div>
    </div>
</div>
<div class="row">
    <!-- Cartão 7 -->
    <div class="col-md-4">
        <div class="card" onclick="this.classList.toggle('rotate')">
            <div class="card-front">
                <p>VMA kisses</p>
            </div>
            <div class="card-back">
                <img src="resources/kiss.jpeg" alt="Back of Card" class="img-fluid">
            </div>
        </div>
    </div>
    <!-- Cartão 8 -->
    <div class="col-md-4">
        <div class="card" onclick="this.classList.toggle('rotate')">
            <div class="card-front">
                <p>Hurricane with girl name</p>
            </div>
            <div class="card-back">
                <img src="resources/katrina.jpeg" alt="Back of Card" class="img-fluid">
            </div>
        </div>
    </div>
    <!-- Cartão 9 -->
    <div class="col-md-4">
        <div class="card" onclick="this.classList.toggle('rotate')">
            <div class="card-front">
                <p>American Saddam revenge</p>
            </div>
            <div class="card-back">
                <img src="resources/iraq.jpeg" alt="Back of Card" class="img-fluid">
            </div>
        </div>
    </div>
</div>
<div class="row">
    <!-- Cartão 10 -->
    <div class="col-md-4">
        <div class="card" onclick="this.classList.toggle('rotate')">
            <div class="card-front">
                <p>We miss you, dear Escudo</p>
            </div>
            <div class="card-back">
                <img src="resources/euro.png" alt="Back of Card" class="img-fluid">
            </div>
        </div>
    </div>
    <!-- Cartão 11 -->
    <div class="col-md-4">
        <div class="card" onclick="this.classList.toggle('rotate')">
            <div class="card-front">
                <p>Pop star divorce</p>
            </div>
            <div class="card-back">
                <img src="resources/divorce.jpeg" alt="Back of Card" class="img-fluid">
            </div>
        </div>
    </div>
    <!-- Cartão 12 -->
    <div class="col-md-4">
        <div class="card" onclick="this.classList.toggle('rotate')">
            <div class="card-front">
                <p>This airplane is on fire!</p>
            </div>
            <div class="card-back">
                <img src="resources/concorde.jpeg" alt="Back of Card" class="img-fluid">
            </div>
        </div>
    </div>
</div>
</div>`


let cards = document.getElementsByClassName("card");
let audioFiles = ["resources/heyYah.mp3", "resources/allright.mp3"];
let currentIndex = 0; // Índice atual do arquivo de áudio a ser reproduzido

function getRandomIndex() {
    // Retorna um índice aleatório diferente do índice atual
    let newIndex = currentIndex;
    while (newIndex === currentIndex) {
        newIndex = Math.floor(Math.random() * audioFiles.length);
    }
    currentIndex = newIndex;
    return currentIndex;
}

let audio = new Audio(audioFiles[currentIndex]); // Objeto de áudio inicial com o primeiro arquivo de áudio

// Adiciona event listeners para quando uma carta é virada para trás
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("mouseenter", function() {
        audio.src = audioFiles[getRandomIndex()]; // Atualiza o arquivo de áudio
        audio.play(); // Reproduz o som quando o mouse entra na carta
    });
}

// Adiciona event listener para quando uma carta é virada para a frente
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("mouseleave", function() {
        audio.pause(); // Pausa o som quando o mouse sai da carta
        audio.currentTime = 0; // Retorna o áudio ao início
    });
}

}

export default { processEvent };
