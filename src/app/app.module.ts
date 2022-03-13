import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule } from '@po-ui/ng-components';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

//PO-UI
import { PoTableModule } from '@po-ui/ng-components';
import { PoPopupModule } from '@po-ui/ng-components';
import { PoDialogModule } from '@po-ui/ng-components';
import { PoFieldModule } from '@po-ui/ng-components';
import { FormsModule } from '@angular/forms';
import { PoNotificationModule } from '@po-ui/ng-components';

//Componentes
import { TaskComponent } from "./modules/task/task.component";
import { TestesComponent } from "./modules/testes/testes.component";
import { TaskCreateComponent } from "./modules/task/taskCRUD/taskCreate/taskCreate.component";
import { TaskEditViewComponent } from "./modules/task/taskCRUD/taskEditView/taskEditView.component";


@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TestesComponent,
    TaskCreateComponent,
    TaskEditViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    CommonModule,
    RouterModule,
    RouterModule.forRoot([]),
    PoTableModule,
    PoPopupModule,
    PoDialogModule,
    PoFieldModule,
    FormsModule,
    PoNotificationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
