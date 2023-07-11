import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecurityModule } from './security/security.module';
// import { NotfoundComponent } from './notfound/notfound.component';
// import { ActorsListComponent } from './actors/actors-list/actors-list.component';
// import { ActorsModule } from './actors/actors.module';
// through cli we create feature modules 
// ng g m modulefilename --module app-module --routing

@NgModule({
  declarations: [
    AppComponent,
    // NotfoundComponent,
    // ActorsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SecurityModule,
    // ActorsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
