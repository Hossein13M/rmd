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
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { ChartModule } from './components/chart/chart.module';
import { MatDividerModule } from '@angular/material/divider';
import { LoadingInterceptor } from './loadingInterceptor';
import { LoadingService } from './services/loading.service';
import { LoadingModule } from './components/loading/loading.module';
import { MaterialPersianDateAdapter, PERSIAN_DATE_FORMATS } from './services/persian-date-picker.adapter';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
    declarations: [AppComponent, SnackbarComponent],
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
        LoadingModule,
        MatSnackBarModule,
    ],
    providers: [
        AppService,
        { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true },
        LoadingService,
        { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
        // { provide: MAT_DATE_LOCALE, useValue: 'fa-IR' },

        {
            provide: DateAdapter,
            useClass: MaterialPersianDateAdapter,
            deps: [MAT_DATE_LOCALE],
        },
        {
            provide: MAT_DATE_FORMATS,
            useValue: PERSIAN_DATE_FORMATS,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
