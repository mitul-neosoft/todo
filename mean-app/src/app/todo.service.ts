import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TodoService {

  constructor(private http:Http) { }
  getAllTodos(){
    return this.http.get('api/todos')
           .map(res => res.json());
  }
  addTodos(todotext){
    return this.http.post('api/addtodo',{todotext})
           .map(res => res.json());
  }
  editTodos(todooldtext,todonewtext){
    return this.http.post('api/edittodo',{todooldtext,todonewtext})
           .map(res => res.json());
  }
  deleteTodos(todotext){
    return this.http.post('api/deletetodo',{todotext})
           .map(res => res.json());
  }
}
