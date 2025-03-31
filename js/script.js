class Calculator{
    constructor(){
        this.upperValue = document.querySelector('#upper-number');
        this.resultValue - document.querySelector('#result-number');
        this.reset = 0;
    } 
    //método de soma
    sum(n1,n2){
        return n1 + n2;
    }

    //método de subtração
    sub(n1,n2){
        return n1 - n2;
    }

    //método de divisão

    div(n1,n2){
        try{
            if (n2 === 0){
                throw new Error ('Divisão por zero');
            }
            return n1 / n2;
        } catch (error) {
            return `Erro: ${error.message}`;
        }
    }

    multi(n1,n2){
        return n1*n2;
    }

    btnPress(){
        
    }

    
}

const calc = new Calculator;


//start nos btns
let buttons = document.querySelectorAll('.btn');

console.log('CALCULADORA');

let resultado = calc.sum(1,2);
console.log('Resultado da soma de 1 e 2: ' + resultado);

resultado = calc.sub(5,4);
console.log('Resultado da subtração de 5 e 4:' + resultado);

resultado = calc.div(10,2);
console.log('Resultado da divisão de 10 por 2:' + resultado);

resultado = calc.multi(8,5);
console.log('Resultado da multiplicação de 8 e 5:' + resultado);

for (let i=0; buttons.length > i; i++) {
    buttons[i].addEventListener('click', calc.btnPress);
}
