import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponentComponent } from './my-component/my-component.component';
import { NzToolTipModule } from 'ng-zorro-antd';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

@NgModule({
  declarations: [MyComponentComponent],
  imports: [
    CommonModule,
    NzToolTipModule,
    NzButtonModule,
    NzDividerModule,
    NzIconModule,
    NzDropDownModule,
  ],
  exports: [MyComponentComponent],
})
export class MyModuleModule {}
