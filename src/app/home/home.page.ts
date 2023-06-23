import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class HomePage {
  valor1: any = null;
  valor2: any = null;
  resultado: any = null;
  operador: any = null;
  // variáveis que vão ser usados no código

  SalvarValor(numero: any) {
    // função que pega os números da calculadora (0-9)
    if(this.valor1 == null) {
      this.valor1 = numero;
      this.resultado = numero;
      // guarda o valor1 que antes era null e passa a ser o número que o usuário coloca
    } else {
      if(this.valor2 == null) {
        this.valor2 = numero;
        this.resultado = numero
        // guarda o valor2 que antes era null e passa a ser o número que o usuário coloca
      }
    }
    console.log(this.valor1);
    console.log(this.operador);
    console.log(this.valor2);
  }

  operacao(operador: any) {
    this.operador = operador
  }

  calcular() {
    // função que usa os operadores da calculadora (+, -, *, / e %)
    if(this.operador == '+') {
      this.resultado = this.valor1 + this.valor2;
    } else if(this.operador == '-') {
      this.resultado = this.valor1 - this.valor2;
    } else if(this.operador == '*') {
      this.resultado = this.valor1 * this.valor2;
    } else if(this.operador == '/') {
      this.resultado = this.valor1 / this.valor2;
    } else if(this.operador == '%') {
      this.resultado = this.valor1 % this.valor2;
    }
    // o operador pega o valor1 e valor2 e faz o cálculo com os operadores acima
  }

  LimparConta() {
    this.valor1 = null;
    this.valor2 = null;
    this.resultado = null;

    // função que transforma todos as variáveis que estavam com valor em variáveis com null 
  }

  Negativo() {
    // função que transforma o número do positivo para negativo
    if(this.valor1 != null && this.valor2 == null) {
      this.valor1 = this.valor1 * (-1);
      console.log(this.valor1);
    } 
    
    if(this.valor1 != null && this.valor2 != null) {
      this.valor2 = this.valor2 * (-1);
      console.log(this.valor2); 
    } 
  }
}
