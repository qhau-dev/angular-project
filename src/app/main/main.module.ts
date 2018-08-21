import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { mainRoutes } from './main-routes.module';
import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { UserModule } from './user/user.module';

@NgModule({
  imports: [
    CommonModule,
    UserModule,
    RouterModule.forChild(mainRoutes)
  ],
  declarations: [MainComponent]
})
export class MainModule { }
