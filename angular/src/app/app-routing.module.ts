import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PortfolioComponent} from './portfolio/portfolio.component';
import {CoffeebankComponent} from './portfolio/coffeebank/coffeebank.component';


const routes: Routes = [
  {
    path: 'coffeebank',
    component: CoffeebankComponent
  },
  {
    path: '',
    component: PortfolioComponent
  },
  {
    path: '**',
    component: PortfolioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
