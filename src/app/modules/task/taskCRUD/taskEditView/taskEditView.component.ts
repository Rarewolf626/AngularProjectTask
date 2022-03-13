import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'taskEditView',
  templateUrl: './taskEditView.component.html'
})
export class TaskEditViewComponent implements OnInit {

  constructor(private route: ActivatedRoute){}

  public ngOnInit(){
    var z = this.route.queryParams;

    //     this.route.queryParams
    //     .subscribe((params) => {
    //     var x = String(params);
    //   }
    // );

  var x = this.route.snapshot.paramMap.get('id');
    
  }

}
