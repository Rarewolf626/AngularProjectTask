import { Component, OnInit, ViewChild } from '@angular/core';

import { PoCheckboxGroupOption, PoModalComponent, PoNotification, PoNotificationService, PoRadioGroupOption, PoToasterOrientation, PoToasterType } from '@po-ui/ng-components';

import { PoDialogAlertLiterals, PoDialogConfirmLiterals, PoDialogService } from '@po-ui/ng-components';


@Component({
  selector: 'testes',
  templateUrl: './testes.component.html'
})

export class TestesComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) poModal: PoModalComponent;

  action: boolean;
  actionLabel: string;
  message: string;
  orientation: number;
  type: number;
  duration: number;



  constructor(private poNotification: PoNotificationService) {}

  ngOnInit() {

  }


  showNotification() {
    const poNotification: PoNotification = {
      message: 'teste',
      orientation: undefined,
      action: undefined,
      actionLabel: '',
      duration: undefined
    };
    poNotification.action = () => this.poModal.open();

    switch (this.type) {
      case PoToasterType.Success: {
        this.poNotification.success(poNotification);
        break;
      }
      case PoToasterType.Error: {
        this.poNotification.error(poNotification);
        break;
      }
      case PoToasterType.Warning: {
        this.poNotification.warning(poNotification);
        break;
      }
      case PoToasterType.Information: {
        this.poNotification.information(poNotification);
        break;
      }
      default: {
        this.poNotification.success(poNotification);
        break;
      }
    }
  }
}