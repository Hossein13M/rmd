import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContractsListComponent } from './contracts-list.component';

@NgModule({
    declarations: [ContractsListComponent],
    exports: [ContractsListComponent],
    imports: [CommonModule],
})
export class ContractsListModule {}
