import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { ProductDetails } from './pages/products/product-details/product-details';
import { ProductForm } from './pages/products/product-form/product-form';
import { NotFound } from './pages/not-found/not-found';
import { Account } from './pages/account/account';
import { Login } from './components/login/login';
import { Register } from './components/register/register';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'products', component: Products },
  { path: 'products/:id', component: ProductDetails },
  { path: 'products/:id/edit', component: ProductForm },
  { path: 'products/:id/edit', component: ProductForm },
  {
    path: 'account',
    component: Account,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: Login },
      { path: 'register', component: Register },
    ],
  },
  { path: '**', component: NotFound },
];
