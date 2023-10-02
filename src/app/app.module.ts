import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { CockpitComponent } from './cockpit/cockpit.component';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    HighlightDirective,
    CockpitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
