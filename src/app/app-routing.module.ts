import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//componentes
import { TaskComponent } from './modules/task/task.component';
import { TestesComponent } from './modules/testes/testes.component';
import { TaskCreateComponent } from './modules/task/taskCRUD/taskCreate/taskCreate.component';
import { TaskEditViewComponent } from './modules/task/taskCRUD/taskEditView/taskEditView.component';


const routes: Routes = [
  {
    path: 'task', component: TaskComponent,
  },   
  {
    path: 'testes', component: TestesComponent
  },  
  {
    path: 'taskCreate', component: TaskCreateComponent,
  },   
  {
    path: 'taskEditView/:id', component: TaskEditViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
