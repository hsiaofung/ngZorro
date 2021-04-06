import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponentComponent } from './my-component/my-component.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
@NgModule({
  declarations: [MyComponentComponent],
  imports: [CommonModule, NzButtonModule, NzDividerModule, NzIconModule],
  exports: [MyComponentComponent],
})
export class MyModuleModule {}
