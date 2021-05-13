import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayPhotoComponent } from './display-photo/display-photo.component';
import { InputPhotoFormComponent } from './input-photo-form/input-photo-form.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';

const routes: Routes = [
  {
    path: '',
    component: PhotoGalleryComponent
  },
  {
    path: 'photo/create',
    component: InputPhotoFormComponent
  },
  {
    path: 'photo/:id',
    component: DisplayPhotoComponent
  },
  {
    path: 'photo/update/:id',
    component: InputPhotoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
