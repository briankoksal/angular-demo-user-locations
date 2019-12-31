import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactModule } from './contacts/contacts.module';


const routes: Routes = [
  //{ path: '', redirectTo: 'contacts', pathMatch: 'full'}
  // { path: '', redirectTo: 'contacts', pathMatch: 'full'},
  { path: 'contacts', loadChildren: () => import('./contacts/contacts.module').then(mod => mod.ContactModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
