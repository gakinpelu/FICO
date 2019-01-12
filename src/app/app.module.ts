import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { CommonModule }  from '@angular/common';

import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { FooterComponent } from './footer/footer.component';
import { HeadernavComponent } from './headernav/headernav.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MyinfoComponent } from './myinfo/myinfo.component';
import { PendingclientComponent } from './pendingclient/pendingclient.component';
import { FilterPipe } from './filter.pipe';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule }  from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    FooterComponent,
    HeadernavComponent,
    MainpageComponent,
    MyinfoComponent,
    PendingclientComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
