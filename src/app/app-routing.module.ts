import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { SearchCustomersComponent } from './search-customers/search-customers.component';
import { PartnersListComponent } from './partners-list/partners-list.component';
import { CreatePartnerComponent } from './create-partner/create-partner.component';
import { SearchPartnersComponent } from './search-partners/search-partners.component';

 const routes: Routes = [
    { path: '', redirectTo: 'customer', pathMatch: 'full' },
    { path: 'customer', component: CustomersListComponent },
    { path: 'add', component: CreateCustomerComponent },
    { path: 'findbyage', component: SearchCustomersComponent },
    { path: 'partner', component: PartnersListComponent },
    { path: 'addpartner', component: CreatePartnerComponent },
    { path: 'findpartnerbyage', component: SearchPartnersComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
