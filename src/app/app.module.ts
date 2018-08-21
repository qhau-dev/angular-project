import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './main/home/home.component';
import { FunctionComponent } from './main/function/function.component';
import { ProductComponent } from './main/product/product.component';
import { ProductCategoryComponent } from './main/product-category/product-category.component';
import { RoleComponent } from './main/role/role.component';
import { UserComponent } from './main/user/user.component';
import { appRoutes } from './app-routes.module';
import { RouterModule, Router } from '@angular/router';
import { LoginModule } from './login/login.module';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FunctionComponent,
    ProductComponent,
    ProductCategoryComponent,
    RoleComponent,
  ],
  imports: [
    BrowserModule,
    LoginModule,
    MainModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
