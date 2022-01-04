import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/ui/navbar/navbar.component';
import { SidebarComponent } from './core/ui/sidebar/sidebar.component';
import { FitnesscenterMsModule } from './fitnesscenter-ms/fitnesscenter-ms.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app-routing.module';


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
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
