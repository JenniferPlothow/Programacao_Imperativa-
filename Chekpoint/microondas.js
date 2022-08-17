
// Checkpoint 1 - Digital House Brasil -

// Programa que simula um microondas super veloz.

// - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

//       1 - Pipoca – 10 segundos (padrão);
//       2 - Macarrão – 8 segundos (padrão);
//       3 - Carne – 15 segundos (padrão);
//       4 - Feijão – 12 segundos (padrão);
//       5 - Brigadeiro – 8 segundos (padrão); 

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. 
//   Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".


function microondas(prato, segundos){
    //pipoca - 10 segundos (padrão).
    if(prato == 'pipoca' && segundos > 2 * 10 && segundos < 3 * 10){
      console.log('Beep Beep... a comida queimou, prepare tudo novamente.')
    }else if (prato == 'pipoca' && segundos < 10){
      console.log('Beep Beep.. tempo insuficiente, tente novamente!')
    }else if (prato == 'pipoca' && segundos >= 3 * 10){
      console.log('Beep Beep...  o micro-ondas vai explodir... KA-BUM!')
    }else if (prato == 'pipoca' && segundos == 10){
      console.log('Beep Beep...  prato pronto, bom apetite!')
    }
    //macarrao – 8 segundos (padrão).
    else if(prato == 'macarrao' && segundos > 2 * 8 && segundos < 3 * 8){
      console.log('Beep Beep... comida queimou, prepare tudo novamente.')
    }else if (prato == 'macarrao' && segundos < 8){
      console.log('Beep Beep...  tempo insuficiente, tente novamente!')
    }else if (prato == 'macarrao' && segundos > 3 * 8){
      console.log('Beep Beep..  o micro-ondas vai explodir... KA-BUM!')
    }else if (prato == 'macarrao' && segundos == 8){
      console.log('Beep Beep... prato pronto, bom apetite!')
    }
    //carne – 15 segundos (padrão).
    else if(prato == 'carne' && segundos > 2 * 15 && segundos < 3 * 15){
      console.log('Beep Beep...  a comida queimou, prepare tudo novamente.')
    }else if(prato == 'carne' && segundos < 15){
      console.log('Beep Beep...  tempo insuficiente, tente novamente!')
    }else if(prato == 'carne' && segundos > 3 * 15){
      console.log('Beep Beep... o micro-ondas vai explodir... KA-BUM!')
    }else if(prato == 'carne' && segundos == 15){
      console.log('Beep Beep... prato pronto, bom apetite!')
    }
    // feijao – 12 segundos (padrão).
    else if(prato == 'feijao' && segundos > 2 * 12 && segundos < 3 * 12){
      console.log('Beep Beep...a comida queimou, prepare tudo novamente.')
    }else if (prato == 'feijao' && segundos < 12){
      console.log('Beep Beep...  tempo insuficiente, tente novamente!')
    }else if (prato == 'feijao' && segundos > 3 * 12){
      console.log('Beep Beep...o micro-ondas vai explodir... KA-BUM!')
    }else if(prato == 'feijao' && segundos == 12){
      console.log('Triiim...  prato pronto, bom apetite!')
    }
    //brigadeiro – 8 segundos (padrão).
    else if(prato == 'brigadeiro' && segundos > 2 * 8 && segundos < 3 * 8){
      console.log('Beep Beep...  a comida queimou, prepare tudo novamente.')
    }else if(prato == 'brigadeiro' && segundos < 8){
      console.log('Beep Beep... tempo insuficiente, tente novamente!')
    }else if(prato == 'brigadeiro' && segundos > 3 * 8){
      console.log('Beep Beep..  o micro-ondas vai explodir... KA-BUM!')
    }else if(prato == 'brigadeiro' && segundos == 8){
      console.log('Beep Beep... prato pronto, bom apetite!')
    }
    else {
      console.log('Beep Beep...  prato inexistente, tente um válido.')
    }
  }

microondas('pipoca', 10);
microondas('banconzitos', 10);
microondas('feijão', 25);
