import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { EmbedVideo } from 'ngx-embed-video';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { ImagePreloadDirective } from './image-preload.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    ProjectsComponent,
    ImagePreloadDirective
  ],
  imports: [
    HttpClientModule, EmbedVideo.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,    // <-- Right here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
