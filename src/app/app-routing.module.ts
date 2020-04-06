import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { SearchDeleteComponent} from './search-delete/search-delete.component';

const routes: Routes = [
  {path:"",redirectTo:"showBooks",pathMatch:"full"},
   {path:"showBooks",component:SearchDeleteComponent},
   {path:"insertBooks",component:RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
