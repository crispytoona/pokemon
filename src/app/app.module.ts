import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
    // Add other components here
  ],
  imports: [
    BrowserModule
    // Add other modules like FormsModule, HttpClientModule, etc., if needed
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
