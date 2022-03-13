import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PoDialogAlertLiterals, PoDialogConfirmLiterals, PoDialogService, PoModalComponent, PoNotification, PoToasterType } from '@po-ui/ng-components';
import {TaskModel} from '../../../../models/task.model';
import {TaskService} from '../../../../shared/services/task.service';
import { PoNotificationService } from '@po-ui/ng-components';


@Component({
  selector: 'taskCreate',
  templateUrl: './taskCreate.component.html'
})
export class TaskCreateComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  action: string;
  dialogMethod: string;
  literalsAlert: PoDialogAlertLiterals;
  literalsConfirm: PoDialogConfirmLiterals;
  messageConfirmSave: string;
  titleConfirmSave: string;
  actionOptions: Array<string>;
  help: string;
  literals: string;
  type: number;


  public constructor(public router:Router, private poAlert: PoDialogService, private taskService:TaskService,
    private poNotification: PoNotificationService){ }
  
  title: string;
  dateTime: Date;
  check: boolean;
  description: string;

  public ngOnInit(){
    this.restore();
  }

  Return(){
    this.router.navigate(['task']);
  }

  openDialogConfirmSave(){
    this.action = '';
    this.dialogMethod === 'alert' ? this.alertDialog() : this.confirmDialog();
  }

  alertDialog() {
    this.poAlert.alert({
      literals: this.literalsAlert,
      title: this.titleConfirmSave,
      message: this.messageConfirmSave,
      ok: () => (this.actionOptions.includes('ok') ? (this.action = 'OK') : undefined)
    });
  }

  confirmDialog() {
    this.poAlert.confirm({
      literals: this.literalsConfirm,
      title: this.titleConfirmSave,
      message: this.messageConfirmSave,
      confirm: () => (this.Confirm()),
      cancel: () => (this.actionOptions.includes('cancel') ? (this.action = 'Cancel') : undefined),
      close: () => (this.actionOptions.includes('close') ? (this.action = 'Close') : undefined)
    });
  }

  restore() {
    this.action = undefined;
    this.actionOptions = [];
    this.titleConfirmSave = 'Adicionar';
    this.messageConfirmSave = 'Deseja realmente Adicionar a tarefa?';
    this.dialogMethod = undefined;
    this.literals = undefined;
    this.literalsAlert = undefined;
    this.literalsConfirm = undefined;
    this.help = '';
  }

  async Confirm(){
    let task: TaskModel = new TaskModel();
    task.titulo = this.title;
    task.data = this.dateTime;
    task.descricao = this.description;
    task.finalizada = this.check;

    await this.taskService.addTask(task).subscribe(() => {
      this.router.navigate(['task']);
    });

    const poNotification: PoNotification = {
      message: 'Tarefa Salva com Sucesso!',
      orientation: undefined,
      action: undefined,
      actionLabel: '',
      duration: undefined
    };
    this.poNotification.success(poNotification);
  }

}
