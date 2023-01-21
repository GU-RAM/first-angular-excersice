import { Component, EventEmitter, Output } from '@angular/core';
import { Difficulty } from '../app.component';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent {
  difficulty = Difficulty;

  taskName: string = '';
  difficultyChosen: Difficulty;

  @Output() taskAdd = new EventEmitter<{
    todo: string;
    difficulty: Difficulty;
  }>();

  constructor() {
    this.difficultyChosen = Difficulty.Medium;
  }

  addTodo() {
    if (this.taskName) {
      this.taskAdd.emit({
        todo: this.taskName,
        difficulty: this.difficultyChosen,
      });
      this.taskName = '';
      this.difficultyChosen = Difficulty.Medium;
    }
  }
}
