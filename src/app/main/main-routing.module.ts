import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from '@src/app/main/user/login/login.component';
import { NewUserComponent } from '@src/app/main/user/new-user/new-user.component';
import { MarketComponent } from '@src/app/main/market/market.component';
import { ProfileComponent } from '@src/app/main/user/profile/profile.component';
import {EditComponent} from "@src/app/main/user/profile/edit/edit.component";

const routes: Routes = [
    {
      path: '',
      redirectTo: '/market',
      pathMatch: 'full'
    },
    {
      path: 'market',
      component: MarketComponent
    },
    {
      path: 'product',
      component: ProductComponent
    },
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'new-user',
      component: NewUserComponent
    },
    {
      path: 'profile',
      component: ProfileComponent
    },
    {
      path: 'profile/edit',
      component: EditComponent
    }
  ]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
