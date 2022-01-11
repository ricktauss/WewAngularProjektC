import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';

import { APP_ROUTES } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FitnesscenterMsModule } from './fitnesscenter-ms/fitnesscenter-ms.module';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './core/ui/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { SidebarComponent } from './core/ui/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FitnesscenterMsModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
