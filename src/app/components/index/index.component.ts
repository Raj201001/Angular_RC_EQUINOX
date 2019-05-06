import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdUnit } from './AdUnit';
import { AdunitService } from '../../adunit.service';
import 'rxjs/add/operator/finally';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  adunits: AdUnit[];

  constructor(private adunitservice: AdunitService, private _router: Router) { }

  deleteAdUnit(id) {
    this.adunitservice.deleteAdUnit(id).subscribe(res => {
      console.log('Deleted');
      this.getAdUnit();
    });
  }

  getAdUnit()
  {
    this.adunitservice
      .getAdUnits()
      .subscribe((data: AdUnit[]) => {
      this.adunits = data;
    });
  }

  ngOnInit() {
    this.getAdUnit();
  }

}
