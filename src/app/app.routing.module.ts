import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterProductComponent } from './register-product/register-product.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CatalogComponent } from './catalog/catalog.component';
import { RegisterComponent } from './register/register.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard.service';

const appRoutes: Routes = [

    {path: 'login', component: LoginComponent },
    {path: 'register', component: RegisterComponent},
    {path: 'catalog', component: CatalogComponent, canActivate: [AuthGuard]},
    {path: 'register-product', component: RegisterProductComponent, canActivate: [AuthGuard]},
    {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
    {path: '', redirectTo: 'catalog', pathMatch: 'full'},

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
