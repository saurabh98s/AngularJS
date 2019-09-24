import { Component, OnInit } from '@angular/core';
import { employeeService } from '../employee.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employee:employeeService) { }

  ngOnInit() {
    this.employeeList=this.employee.getEmployee()
  }
  employeeList= []

}
