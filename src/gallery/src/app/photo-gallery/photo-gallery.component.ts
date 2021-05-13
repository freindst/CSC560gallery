import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Photo } from '../photo';

@Component({
  selector: 'app-photo-gallery',
  templateUrl: './photo-gallery.component.html',
  styleUrls: ['./photo-gallery.component.css']
})
export class PhotoGalleryComponent implements OnInit {

  public photos: Photo[] = [];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getPhotoList().subscribe( data => {
      for (const iterator of data['photos']) {
        this.photos.push(new Photo().populate(iterator));
      }
    })
  }
}
