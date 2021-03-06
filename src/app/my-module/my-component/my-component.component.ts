import { Component, OnInit } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd/icon';
import {
  NzContextMenuService,
  NzDropdownMenuComponent,
} from 'ng-zorro-antd/dropdown';

const ngZorrIconLiteral =
  '<svg xmlns="http://www.w3.org/2000/svg" width="17.625" height="21.198" viewBox="0 0 17.625 21.198"><defs><style>.a{fill:none;stroke:#fff;stroke-width:2px;}.b{fill:#fff;}</style></defs><g transform="translate(1.001 1.094)"><g transform="translate(0 0)"><g transform="translate(0 0)"><path class="a" d="M18.617,4.468,10.814,1,3.01,4.468v5.2a10.408,10.408,0,0,0,7.8,10.4c1.994-.486,8.022-3.258,7.8-10.4Z" transform="translate(-3 -1)"/></g></g><path class="b" d="M1,7.883a1,1,0,1,1,0-2H3.382l-.02-4.9A.975.975,0,0,1,4.344,0a1,1,0,0,1,.992.987l.025,5.9a.976.976,0,0,1-.847.97,1,1,0,0,1-.224.025Z" transform="translate(9.11 3.96) rotate(45)"/></g></svg>';
@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
})
export class MyComponentComponent implements OnInit {
  isLoadingOne = false;
  isLoadingPowerOff = false;
  color: string;
  customColors: string[] = ['#f50', '#2db7f5', '#87d068', '#108ee9'];

  constructor(
    private iconService: NzIconService,
    private nzContextMenuService: NzContextMenuService
  ) {
    this.iconService.addIconLiteral('ng-zorro:antd', ngZorrIconLiteral);
    this.color = '#2db7f5';
  }

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
  log() {
    console.log('click dropdown button');
  }
  contextMenu($event: MouseEvent, menu: NzDropdownMenuComponent): void {
    this.nzContextMenuService.create($event, menu);
  }
  closeMenu(): void {
    this.nzContextMenuService.close();
  }
}
