import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { FetchAutorizedDataComponent } from './fetch-autorized-data/fetch-autorized-data.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'fetchData', component: FetchDataComponent },
  { path: 'fetchAutorizedData', component: FetchAutorizedDataComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
