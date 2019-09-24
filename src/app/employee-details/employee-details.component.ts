import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { employeeService } from '../employee.service';
import { LifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private employee: employeeService) { }

  ngOnInit() {
    this.employeeList=this.employee.getEmployee()
  }
   employeeList= []
  //   {id:'1',name:'SAurabh',dept:"CSE"},
  //   {id:"2",name:"NEHAL",dept:"ECE"},
  //   {id:"3",name:"BURHAN",dept:"EE"}
}
