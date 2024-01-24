import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component'
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SearchedComponentComponent } from './searched-component/searched-component.component';
import { MoviePipe } from './movie.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchedComponentComponent,
    MoviePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
