function verHoroscopo() {
      const signo = document.getElementById("signo").value;
      const resultado = document.getElementById("resultado");

      const respostas = {
        áries: {icone: "♈", texto: "Hoje você vai tentar tudo na pressa... e claro, vai dar ruim. 😑"},
        touro: {icone: "♉", texto: "Cuidado: até a preguiça está cansada de você. 🛋️"},
        gêmeos: {icone: "♊", texto: "Vai mudar de ideia 50 vezes antes do almoço. Boa sorte com isso. 🙄"},
        câncer: {icone: "♋", texto: "Drama hoje em dobro. Prepare o lencinho. 😢"},
        leão: {icone: "♌", texto: "Você se acha demais... e hoje ninguém vai notar. 🦁"},
        virgem: {icone: "♍", texto: "Nada vai sair perfeito, aceite logo. 😤"},
        libra: {icone: "♎", texto: "Indecisão até para escolher a roupa. Já desistiu? 👗👕"},
        escorpião: {icone: "♏", texto: "Alguém vai te irritar... e você vai guardar rancor até 2050. 🦂"},
        sagitário: {icone: "♐", texto: "Vai fazer piada sem graça e achar que arrasou. 🤡"},
        capricórnio: {icone: "♑", texto: "Trabalhar, trabalhar... e ninguém vai reconhecer. 💼"},
        aquário: {icone: "♒", texto: "Ideias malucas hoje? Todas sem sentido. 👽"},
        peixes: {icone: "♓", texto: "Você vai sonhar acordado... e tropeçar na vida real. 🐟"}
      };

      if (respostas[signo]) {
        resultado.innerHTML = `<span class="icone">${respostas[signo].icone}</span> ${respostas[signo].texto}`;
      } else {
        resultado.textContent = "Escolhe logo um signo, não tenho o dia todo. 😒";
      }
    }