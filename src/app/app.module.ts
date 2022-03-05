import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Interceptor } from './interceptor';
import { AppService } from './services/app.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from './modules/file-upload/file-upload.module';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ChartModule } from './components/chart/chart.module';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatIconModule,
        MatToolbarModule,
        MatButtonModule,
        MatTooltipModule,
        MatCardModule,
        RouterModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        FileUploadModule,
        DashboardModule,
        MatNativeDateModule,
        ChartModule,
        MatDividerModule,
    ],
    providers: [AppService, { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }, { provide: MAT_DATE_LOCALE, useValue: 'fa-IR' }],
    bootstrap: [AppComponent],
})
export class AppModule {}
