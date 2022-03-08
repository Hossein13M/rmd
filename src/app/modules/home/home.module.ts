import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { GeneralTableModule } from '../../components/general-table/general-table.module';

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, HomeRoutingModule, MatCardModule, MatButtonModule, MatIconModule, GeneralTableModule],
})
export class HomeModule {}
