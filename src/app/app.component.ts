import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PoMenuItem } from '@po-ui/ng-components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public router:Router){}
  
  readonly menus: Array<PoMenuItem> = [
    { label: 'Home', action: this.onClick.bind(this) },
    { label: 'TASK', action: this.taskPage.bind(this) },
    { label: 'TESTES', action: this.testesPage.bind(this) }
  ];

  private onClick() {
    alert('Clicked in menu item')
  }

  private taskPage() {
    this.router.navigate(['task']);
  }

  private testesPage() {
    this.router.navigate(['testes']);
  }
}
