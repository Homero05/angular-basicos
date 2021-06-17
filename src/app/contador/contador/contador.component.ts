import { Component } from '@angular/core';

@Component({
    selector:'app-contador',
    template:`
    
    
    <h1>{{ titulo }}</h1>

    <button (click)="acumular( -base )"> - {{ base }}</button>

    <span>{{numero}}</span>

    <button (click)="acumular( base )"> + {{ base }}</button>

    <h3>La base es: <strong>5</strong></h3>
    `
})

export class ContadorComponent {
    public titulo: string = 'Contador APP';
    numero: number =0;
    base: number = 5;
  
  
    /*sumar(){
      this.numero +=1;
    }
  
    restar(){
      this.numero -=1;
    }*/
  
    acumular(valor:number){
      this.numero += valor;
    }
}