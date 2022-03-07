import { AfterContentInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Location } from '@angular/common';
import { ValidRoutes, ValidRouteTranslation } from './models/common.model';
import { ValidRouteTranslator } from './const/constants';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { LoadingService } from './services/loading.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterContentInit, OnInit {
    public matCardHeader!: string;
    public navigationList: Array<ValidRouteTranslation> = ValidRouteTranslator;
    public isDarkTheme: boolean = true;
    public screenWidth: number = window.innerWidth;
    public isLoading!: Subject<boolean>;
    public loading = new Subject<boolean>();

    @ViewChild('sidenav') sidenav!: MatSidenav;
    @ViewChild('infoSidenav') infoSidenav!: MatSidenav;
    @HostListener('window:resize', ['$event'])
    public onResize() {
        this.screenWidth = window.innerWidth;
    }

    constructor(private readonly location: Location, private readonly router: Router, private readonly loadingService: LoadingService) {}

    public ngOnInit(): void {
        this.isDarkTheme = localStorage.getItem('theme') === 'dark';
        this.checkLoading();
    }

    public ngAfterContentInit(): void {
        this.setHeaderBasedOnCurrentRoute();
    }

    private checkLoading(): void {
        this.loading = this.loadingService.isLoading;
    }

    public clickHandler(navigationItem: ValidRouteTranslation): void {
        this.router.navigate([navigationItem.englishTitle]).finally(() => {
            this.sidenav.close().finally(() => this.setHeaderBasedOnCurrentRoute());
        });
    }

    private setHeaderBasedOnCurrentRoute(): void {
        const path: ValidRoutes = this.location.path().slice(1) as ValidRoutes;
        // the slice is for removing the / from the beginning of the path
        this.matCardHeader = ValidRouteTranslator.find((validRoute) => validRoute.englishTitle === path)!.persianTitle;
    }

    public changeTheme(): void {
        this.isDarkTheme = !this.isDarkTheme;
        localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
    }
}
