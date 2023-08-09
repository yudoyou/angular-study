import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { HelloWorldComponent } from '../components/hello-world.component';
import { ChildComponent } from '../components/child.component';

// import { RouterModule } from '@angular/router';
// import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    ChildComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
