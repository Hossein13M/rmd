import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { FileUploadComponent } from './modules/file-upload/file-upload.component';

const routes: Routes = [
    { component: DashboardComponent, path: 'dashboard' },
    { component: FileUploadComponent, path: 'upload-file' },
    { path: '', pathMatch: 'full', redirectTo: 'upload-file' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
