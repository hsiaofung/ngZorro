import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzStepsModule } from 'ng-zorro-antd/steps';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { PaginationComponent } from './pagination/pagination.component';
import { StepsComponent } from './steps/steps.component';
@NgModule({
  declarations: [MenuComponent, PaginationComponent, StepsComponent],
  imports: [
    CommonModule,
    NzMenuModule,
    NzIconModule,
    NzToolTipModule,
    NzBreadCrumbModule,
    NzPaginationModule,
    NzStepsModule,
    NzDividerModule,
  ],
  exports: [MenuComponent, PaginationComponent, StepsComponent],
})
export class NavigationModule {}
