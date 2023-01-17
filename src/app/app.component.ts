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

  show = true;
  taskName: string = '';
  difficultyChosen: string = '';

  todos: Todo[] = [];

  difficulty: string[] = ['Easy', 'Medium', 'Hard'];
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
  inProgress: Todo[] = [];
  done: Todo[] = [];
}
