import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.css'],
})
export class StepsComponent implements OnInit {
  index = 0;
  content = 'AAAA';
  constructor() {}

  ngOnInit(): void {}
  pre() {
    this.index -= 1;
    this.changeContent();
  }
  next() {
    this.index += 1;
    this.changeContent();
  }
  onIndexChange(index: number): void {
    this.index = index;
    this.changeContent();
  }
  done() {}
  changeContent() {
    switch (this.index) {
      case 0: {
        this.content = 'AAAA';
        break;
      }
      case 1: {
        this.content = 'BBBB';
        break;
      }
      case 2: {
        this.content = 'CCCC';
        break;
      }
      default: {
        this.content = 'error';
      }
    }
  }
}
