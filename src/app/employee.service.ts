import { Injectable } from '@angular/core';

@Injectable()

export class employeeService {
    employeeList= [
        {id:'1',name:'Saurabh',dept:"CSE"},
        {id:"2",name:"NEHAL",dept:"ECE"},
        {id:"3",name:"BURHAN",dept:"EE"}
      ]

      getEmployee(){
          return this.employeeList
      }
      setEmployee(emp){
          this.employeeList.push(emp)
      }
}