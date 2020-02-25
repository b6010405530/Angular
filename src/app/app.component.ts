import { Component } from '@angular/core';
import { TodoService } from './services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sukibong';
  isLoading = true;

  todoList: number[] = [];

  imageUrl = 'http://placeimg.com/640/480/nature';

  isActive = true;

  email: string;

  amount = 123456.78999999;

  today = new Date();

  user = {
    name: 'John Snow',
    age: 20,
    isAdmin: false,
  };

  search(search: string){
    console.log(search);

  }

  onClickOkButton(e) {
    console.log("Clicked!");
    console.log(e);
  }

  constructor(
    private todoServices: TodoService
  ) {
    this.todoList = this.todoServices.getTodoList(); 

  }
}
