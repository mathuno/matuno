let cartas = [
  { pergunta: "3 + 4", resposta: 7 },
  { pergunta: "6 × 2", resposta: 12 },
  { pergunta: "9 - 5", resposta: 4 },
  { pergunta: "8 ÷ 2", resposta: 4 },
  { pergunta: "7 + 3", resposta: 10 },
  { pergunta: "5 × 3", resposta: 15 }
];

let cartaAtual;

function novaCarta() {
  if (cartas.length === 0) {
    document.getElementById("card").textContent = "🎉 Você venceu!";
    document.getElementById("resposta").style.display = "none";
    return;
  }

  const index = Math.floor(Math.random() * cartas.length);
  cartaAtual = cartas[index];
  document.getElementById("card").textContent = cartaAtual.pergunta;
  document.getElementById("resposta").value = "";
  document.getElementById("feedback").textContent = "";
  document.getElementById("cartasRestantes").textContent = cartas.length;
}

function jogarCarta() {
  const resposta = parseInt(document.getElementById("resposta").value);
  const feedback = document.getElementById("feedback");

  if (resposta === cartaAtual.resposta) {
    feedback.textContent = "✅ Correto! Carta jogada.";
    cartas = cartas.filter(c => c !== cartaAtual);
    setTimeout(novaCarta, 1000);
  } else {
    feedback.textContent = "❌ Resposta errada. Tente novamente.";
  }
}

novaCarta();
