import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos:any = [];
  todoText:String = '';
  todoEditText:String = '';
  editActivatedForIndex = -1;
  constructor(private todoservice:TodoService) { }

  ngOnInit() {
    this.getTodos();
  }
  getTodos(){
    this.todoservice.getAllTodos().subscribe(todos =>{
      this.todos = todos;
      console.log(this.todos);
    })
  }
  addTodo() {
    console.log(this.todoText);
    this.todoservice.addTodos(this.todoText).subscribe(todo =>{
      console.log(todo);
      this.todos.push(todo[0]);
      //this.todos.push(todo);
    })
  }

  editTodo(todoOldText,todoNewText){
    this.todoservice.editTodos(todoOldText,todoNewText).subscribe(todo =>{
      console.log(todo);
      if(todo.ok === 1){
        this.todos[this.editActivatedForIndex].name = todoNewText;
        this.editActivatedForIndex = -1;
        this.todoEditText = '';
      }
    })
  }

  deleteTodo(todoText,arrayIndex){

    this.todoservice.deleteTodos(todoText).subscribe(todo =>{
      console.log(todo);
      if(todo.ok === 1){
          this.todos.splice(arrayIndex,1);
      }

    })
  }

  activateEdit(index){
    this.editActivatedForIndex = index;
    this.todoEditText = this.todos[index].name;
  }
}
