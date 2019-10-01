import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';


@Component({
  selector: 'app-inner',
  templateUrl: './inner.component.html',
  styleUrls: ['./inner.component.css']
})
export class InnerComponent implements OnInit {
  a="";
  b="";
  todos=[
    {
      label: "DO THE GIVEN ASSIGNMENT",
      done: true,
      priority: 3
    },
    {
      label: "GO TO THE GYM",
      done: false,
      priority: 2
    },
    {
      label: "BRING LAPTOP TO CLASS",
      done: true,
      priority: 1
    }
  ];

  ngOnInit() {
  }
  i=1
  addTodo(newTodoLabel){
    var newTodo = {
      label : newTodoLabel,
      priority : this.i++,
      done : false
    };
    this.todos.push(newTodo);

  }
  deleteTodo(todo){
    this.todos = this.todos.filter( t => t.label !== todo.label);
  }
  

  } 
