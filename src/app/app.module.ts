import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
// import { ProfileComponent } from './profile/profile.component';
import { TransactComponent } from './components/transact/transact.component';
import { ApiService } from './service/api.service';
import { HttpClientModule } from '@angular/common/http';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { IssueTokenComponent } from './issue-token/issue-token.component';
import { BuyTokenComponent } from './buy-token/buy-token.component';
import { SettlingTransactionsComponent } from './settling-transactions/settling-transactions.component';

const appRoutes : Routes = [
  { path: '', pathMatch:'full',redirectTo:'/login'},
  { path: 'login', component: LoginComponent},
  { path : 'profile', component: ProfileComponent},
  { path : 'transact', component: TransactComponent},
  { path : 'marketplace',component: MarketplaceComponent},
  { path : 'home',component:HomeComponent},
  { path : 'admin',component:AdminComponent},
  { path : 'issueTokens', component:IssueTokenComponent},
  { path : 'buyToken', component:BuyTokenComponent},
  { path : 'settling', component:SettlingTransactionsComponent}
 
];
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    TransactComponent,
    MarketplaceComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    AdminComponent,
    IssueTokenComponent,
    BuyTokenComponent,
    SettlingTransactionsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
