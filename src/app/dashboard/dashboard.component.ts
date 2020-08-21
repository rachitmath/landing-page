import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {

  public userData;

  constructor() { }

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem('userData'));
  }

  ngOnDestroy(): void {
    localStorage.clear();
  }
}
