import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd';
@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, NzMenuModule, NzIconModule, NzToolTipModule],
  exports: [MenuComponent],
})
export class NavigationModule {}
