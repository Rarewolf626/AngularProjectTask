import { Component, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/models/task.model';
import {TaskService} from '../../shared/services/task.service';
import { Router } from '@angular/router';


@Component({
  selector: 'task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit{
  task: TaskModel[];

  columns = [
     { property: 'titulo', label: 'TITULO' },
     { property: 'data', label: 'DATA' },
     { property: 'status', label: 'STATUS', type: 'cellTemplate' },
     { property: 'editar', label: 'EDITAR', type: 'cellTemplate' }
  ];

  public constructor(private taskService:TaskService, public router:Router){ 

  }

  public ngOnInit(){
    this.LoadTasks();
  }

  async LoadTasks(): Promise<void> 
  {
    await this.taskService.readTask(" ").subscribe((task: TaskModel[]) => {
      this.task = task;
    });
  }

  NewTask(){
    this.router.navigate(['taskCreate']);
  }

  editTask(value: any){
    var id = value[0].id;
    
    this.router.navigate(['taskEditView', id]);
    
  }

}