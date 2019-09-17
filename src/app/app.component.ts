import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-calculator-app';
a=null;
b=null;
result=0;
st="";
  add(){
    this.result=this.a+this.b;
    this.st="Result"+this.result;
  }
  sub(){
    this.result=this.a-this.b;
    this.st="Result"+this.result;
  }
  mul(){
    this.result=this.a*this.b;
    this.st="Result"+this.result;
  }
  div(){
    this.result=this.a/this.b;
    this.st="Result"+this.result;
  }
}
