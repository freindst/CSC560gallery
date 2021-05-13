import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputPhotoFormComponent } from './input-photo-form/input-photo-form.component';
import { DisplayPhotoComponent } from './display-photo/display-photo.component';
import { PhotoThumbComponent } from './photo-thumb/photo-thumb.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InputPhotoFormComponent,
    DisplayPhotoComponent,
    PhotoThumbComponent,
    PhotoGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
