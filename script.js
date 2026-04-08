  let itemAtual = "";
  let valorAtual = 0;
  let cardAtual = null;

  function abrirModal(nome, valor) {
    itemAtual = nome;
    valorAtual = valor;

    document.getElementById('itemNome').innerText = nome;
    document.getElementById('itemValor').innerText = "Valor: R$ " + valor;

    document.getElementById('modal').style.display = 'flex';
  }

  function fecharModal() {
    document.getElementById('modal').style.display = 'none';
  }

  function confirmarPresente() {
    const nome = document.getElementById('nomePessoa').value;

    if (!nome) {
      alert("Digite seu nome!");
      return;
    }

    // Marca como comprado
    alert("Obrigado " + nome + "! Você presenteou: " + itemAtual);

    // WhatsApp
    const msg = `Olá! Eu, ${nome}, vou presentear com: ${itemAtual} (R$${valorAtual})`;
    const telefone = "5565999999999"; // ⚠️ COLOCA SEU NÚMERO
    const url = `https://wa.me/${telefone}?text=${encodeURIComponent(msg)}`;

    window.open(url, '_blank');

    fecharModal();
  }


  // CONTADOR
  const dataCasamento=new Date(2026,5,26);
  function atualizarContador(){
    const diff=dataCasamento-new Date();
    if(diff<=0){
      document.getElementById('contador').innerText='Hoje é o grande dia!';
      return;
    }
    const d=Math.floor(diff/(1000*60*60*24));
    const h=Math.floor((diff/(1000*60*60))%24);
    const m=Math.floor((diff/(1000*60))%60);
    const s=Math.floor((diff/1000)%60);
    document.getElementById('contador').innerText=`${d}d ${h}h ${m}m ${s}s`;
  }
  setInterval(atualizarContador,1000);
  atualizarContador();

  const musica = document.getElementById("musica");
const btn = document.getElementById("btnMusica");

let tocando = false;

function toggleMusica() {
  if (tocando) {
    musica.pause();
    btn.innerHTML = "🔇";
  } else {
    musica.volume = 0.3; // volume suave
    musica.play();
    btn.innerHTML = "🎶";
  }
  tocando = !tocando;
}

// inicia após interação do usuário
document.body.addEventListener("click", () => {
  if (!tocando) {
    musica.volume = 0.3;
    musica.play();
    tocando = true;
    btn.innerHTML = "🎶";
  }
}, { once: true });

  // CARROSSEL
const track = document.getElementById('track');
let cards = track.children;

// CLONA primeiro e último
const firstClone = cards[0].cloneNode(true);
const lastClone = cards[cards.length - 1].cloneNode(true);

track.appendChild(firstClone);
track.insertBefore(lastClone, cards[0]);

let index = 1; // começa no primeiro real

function atualizarPosicao(semAnimacao = false) {
  const w = track.children[0].offsetWidth + 20;

  if (semAnimacao) {
    track.style.transition = "none";
  } else {
    track.style.transition = "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)";
  }

  track.style.transform = `translate3d(-${index * w}px, 0, 0)`;
}

// posição inicial
window.onload = () => {
  atualizarPosicao(true);
};

// mover
function mover(dir) {
  index++;
  atualizarPosicao();

  // quando chega no clone final
  if (index === track.children.length - 1) {
    setTimeout(() => {
      index = 1;
      atualizarPosicao(true);
    }, 800);
  }

  // quando chega no clone inicial
  if (index === 0) {
    setTimeout(() => {
      index = track.children.length - 2;
      atualizarPosicao(true);
    }, 800);
  }
}

// autoplay
let intervalo = setInterval(() => mover(1), 5000);

// pausa no hover
track.addEventListener("mouseenter", () => clearInterval(intervalo));
track.addEventListener("mouseleave", () => {
  intervalo = setInterval(() => mover(1), 5000);
});

  
const intro = document.getElementById("intro");


// inicia após interação (necessário)
musica.currentTime

document.body.addEventListener("click", () => {

  musica.currentTime = 5; // começa no segundo 5
  musica.volume = 0;
  musica.play();

  // fade-in da música
  let vol = 0;
  const fade = setInterval(() => {
    if (vol < 0.3) {
      vol += 0.03;
      musica.volume = vol;
    } else {
      clearInterval(fade);
    }
  }, 100);

}, { once: true });

musica.currentTime = 7;


// some com a tela depois de alguns segundos
setTimeout(() => {
  intro.classList.add("fade-out");
}, 4000);

