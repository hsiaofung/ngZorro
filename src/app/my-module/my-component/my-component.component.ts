import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
})
export class MyComponentComponent implements OnInit {
  isLoadingOne = false;
  isLoadingPowerOff = false;

  constructor() {}

  ngOnInit(): void {}
  loadOne() {
    this.isLoadingOne = true;
    setTimeout(() => {
      this.isLoadingOne = false;
    }, 5000);
  }
  loadPowerOff() {
    this.isLoadingPowerOff = true;
    setTimeout(() => {
      this.isLoadingPowerOff = false;
    }, 5000);
  }
}
