import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';

import { SperListComponent } from './salesperson/sper-list/sper-list.component';
import { SperDetailComponent } from './salesperson/sper-detail/sper-detail.component';
import { SperCreateComponent } from './salesperson/sper-create/sper-create.component';
import { SperEditComponent } from './salesperson/sper-edit/sper-edit.component';

import { E404Component } from './misc/e404/e404.component';

const routes: Routes = [
  { path: '', redirectTo: '/cust/list', pathMatch: 'full' },

  { path: 'cust/list', component: CustomerListComponent } ,
  { path: 'cust/detail/:id', component: CustomerDetailComponent },
  { path: 'cust/create', component: CustomerCreateComponent },
  { path: 'cust/edit/:id', component: CustomerEditComponent },

  // { path: '', redirectTo: '/saleperson/list', pathMatch: 'full'},
  { path: 'sper/list', component: SperListComponent  },
  { path: 'sper/detail/:id', component: SperDetailComponent  },
  { path: 'sper/create', component: SperCreateComponent  },
  { path: 'sper/edit/:id', component: SperEditComponent  },

  { path: '**', component: E404Component} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
