import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-angular-app';
  name ='saurabh';
  // this is string interpolation;
  displayHelloworld() {
    return 'Hello world';


    
  }
 display=this.displayHelloworld(); 
 count=5;
 increaseCount(){
   this.count+=1;
 }
 decreaseCount(){
  this.count-=1;
}

list=[1,2,3,4,"One","two","three"]
boundName="Mpo lAb";
}
