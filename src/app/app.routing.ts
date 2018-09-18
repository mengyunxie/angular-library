import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { DeviceMgtModule } from 'device-mgt';
import { ProductMgtModule } from 'product-mgt';

const routes: Routes = [
  {
    path: 'appComponent',
    component: AppComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: 'device/:id',
        loadChildren: () => DeviceMgtModule
      },
      {
        path: 'product/:id',
        loadChildren: () => ProductMgtModule
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

export const AppRoutes = RouterModule.forRoot(routes);
