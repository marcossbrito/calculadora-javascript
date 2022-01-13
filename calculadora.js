function calculadora() {
    const operacao = Number(prompt(
        'Escolha uma operação:\n 1 - Soma\n 2 - Subtração\n 3 - Multiplicação\n 4 - Divisão'
    ));

    if(!operacao || operacao >= 5){
        alert('operação inválida!');
        calculadora();
    }
    else{
        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo valor:'));
        let resultado;

        // if(!n1 || !n2){
        //     alert('Erro - primeiro e/ou segundo valor incorreto(s)!');
        //     calculadora();
        // }
        // else{
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }
    
            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }
    
            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} x ${n2} = ${resultado}`);
                novaOperacao();
            }
    
            function divisao() {
                if(n2 == 0){
                    alert('impossível dividir por zero!');
                    novaOperacao();
                }
                else{
                    resultado = n1 / n2;
                    alert(`${n1} / ${n2} = ${resultado}`);
                    novaOperacao();
                }
            }
    
            function novaOperacao() {
                let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não');
                if(opcao == 1){
                    calculadora();
                }
                else if(opcao == 2){
                    alert('Até mais!');
                }
                else{
                    alert('Digite uma opção válida!');
                    novaOperacao();
                }
            }
        // }

        switch(operacao){
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisao();
                break;
        }
    }    
}

calculadora();