import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskListItemComponent } from './task-list/task-list-item/task-list-item.component';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [AppComponent, AddTaskComponent, TaskListItemComponent, TaskListComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
