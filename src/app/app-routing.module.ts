import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'upload-file' },
    { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then((m) => m.DashboardModule) },
    { path: 'upload-file', loadChildren: () => import('./modules/file-upload/file-upload-routing.module').then((m) => m.FileUploadRoutingModule) },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
