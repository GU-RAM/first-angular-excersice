import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Todo } from 'src/app/app.component';

@Component({
  selector: 'app-task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.scss'],
})
export class TaskListItemComponent {
  @Input() todos: Todo[] = [];
  @Input() inProgress: Todo[] = [];
  @Input() done: Todo[] = [];
  @Output() delete = new EventEmitter<number>();
  @Output() onAddInProgress = new EventEmitter<number>();
  @Output() onAddDone = new EventEmitter<number>();
  @Output() onBackToInProgress = new EventEmitter<number>();
  @Output() onBackToTodo = new EventEmitter<number>();

  deleTodo(index: number) {
    this.delete.emit(index);
  }

  addInProgress(index: number) {
    this.onAddInProgress.emit(index);
  }

  addDone(index: number) {
    this.onAddDone.emit(index);
  }

  backToInProgress(index: number) {
    this.onBackToInProgress.emit(index);
  }

  backToTodo(index: number) {
    this.onBackToTodo.emit(index);
  }
}
