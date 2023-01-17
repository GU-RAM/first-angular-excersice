import { Component } from '@angular/core';

interface Todo {
  todo: string;
  difficulty: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'todo-list';

  difficulty: string[] = ['Easy', 'Medium', 'Hard'];

  taskName: string = '';
  difficultyChosen: string = '';

  todos: Todo[] = [];
  inProgress: Todo[] = [];
  done: Todo[] = [];

  addTodo() {
    if (this.taskName && this.difficultyChosen) {
      this.todos.push({
        todo: this.taskName,
        difficulty: this.difficultyChosen,
      });
      this.taskName = '';
      this.difficultyChosen = '';
    }
  }

  deleTodo(index: number) {
    this.todos.splice(index, 1);
  }

  addInProgress(index: number) {
    this.inProgress.push(...this.todos.splice(index, 1));
  }

  addDone(index: number) {
    this.done.push(...this.inProgress.splice(index, 1));
  }

  backToInProgress(index: number) {
    this.inProgress.push(...this.done.splice(index, 1));
  }

  backToTodo(index: number) {
    this.todos.push(...this.inProgress.splice(index, 1));
  }
}
