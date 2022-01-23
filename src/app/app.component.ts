import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  public isDarkTheme: boolean = true;
  public screenWidth: number = window.innerWidth;
  @ViewChild('sidenav') sidenav!: MatSidenav;
  @ViewChild('infoSidenav') infoSidenav!: MatSidenav;
  @HostListener('window:resize', ['$event'])
  public onResize() {
    this.screenWidth = window.innerWidth;
  }

  public clickHandler(): void {
    this.sidenav.close().finally();
  }

  ngOnInit(): void {
    this.isDarkTheme = localStorage.getItem('theme') === 'dark';
  }

  public changeTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
    localStorage.setItem('theme', this.isDarkTheme ? 'dark' : 'light');
  }
}
