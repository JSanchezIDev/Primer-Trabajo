import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './pagina/header.component';
import { FooterComponent } from './pagina/footer.component';
import { LeftComponent } from './pagina/left.component';
import { RightComponent } from './pagina/right.component';
@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent, LeftComponent, RightComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
