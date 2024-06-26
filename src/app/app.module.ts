import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule, Routes }   from '@angular/router';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from "@angular/material/form-field";

import { AppComponent } from './app.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { SettingsComponent } from './components/settings/settings.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ShipmentsComponent } from './components/shipments/shipments.component';
import { LoadComponent } from './components/load/load.component';
import { MasterListComponent } from './components/master-list/master-list.component';
import { ReportsComponent } from './components/reports/reports.component';
import { AccountingComponent } from './components/accounting/accounting.component';
import { ControlRoomComponent } from './components/control-room/control-room.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component'

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    SettingsComponent,
    DashboardComponent,
    ShipmentsComponent,
    LoadComponent,
    MasterListComponent,
    ReportsComponent,
    AccountingComponent,
    ControlRoomComponent,
    OrdersComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatSidenavModule,
    MatSelectModule,
    MatFormFieldModule,
    MatMenuModule,
    MatIconModule,
    HttpClientModule,
    MatListModule,
    RouterModule,
    MatExpansionModule,
    MatTooltipModule,
    RouterModule.forRoot([])
  ],
  providers: [],  
  bootstrap: [AppComponent]
})
export class AppModule { }
