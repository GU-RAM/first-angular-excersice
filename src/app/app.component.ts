import { Component } from '@angular/core';

export enum Difficulty {
  Easy = 'Easy',
  Medium = 'Medium',
  Hard = 'Hard',
}

export interface Todo {
  todo: string;
  difficulty: Difficulty;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo-list';

  todos: Todo[] = [];
  inProgress: Todo[] = [];
  done: Todo[] = [];

  addToDoHandler(todo: Todo) {
    this.todos.push(todo);
  }

  deleTodoHandler(index: number) {
    this.todos.splice(index, 1);
  }

  addInProgressHandler(index: number) {
    this.inProgress.push(...this.todos.splice(index, 1));
  }

  addDoneHandler(index: number) {
    this.done.push(...this.inProgress.splice(index, 1));
  }

  backToInProgressHandler(index: number) {
    this.inProgress.push(...this.done.splice(index, 1));
  }

  backToTodoHandler(index: number) {
    this.todos.push(...this.inProgress.splice(index, 1));
  }
}
