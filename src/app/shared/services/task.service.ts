import { formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { TaskModel } from '../../models/task.model';
import { BaseService } from './base.service';

import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class TaskService  {
  urlServiceREST = '/api/task';
  constructor(private httpClient: HttpClient) { }

  readTask(searchWord: any) {
    let paramsToSend: string = '';
    let currentDate = new Date();
    const date = formatDate(currentDate, 'yyyy-MM-dd', 'en-US');
    paramsToSend = searchWord + '/' + date;
    try {
      var tasks =this.httpClient.get<TaskModel[]>(this.urlServiceREST+'/'+ paramsToSend);
      return tasks;
    }
    catch (e) {
    }

  }

  addTask(task: TaskModel) {
    try {
      var result =this.httpClient.post<TaskModel>(this.urlServiceREST,task);
      return result;
    }
    catch (e) {
      var x =0;
    }

  }
}