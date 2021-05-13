import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Photo } from '../photo';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-photo',
  templateUrl: './display-photo.component.html',
  styleUrls: ['./display-photo.component.css']
})
export class DisplayPhotoComponent implements OnInit {

  public photo: Photo = new Photo();
  public src: string = "http://localhost:3000/";
  public isDataloaded: boolean = false;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.route.url.subscribe(segments => 
      {
      let id: string = segments[1].path;
      this.apiService.showPhoto(id).subscribe(data => {
        this.photo = this.photo.populate(data["photo"]);
      })
    })
  }

  onClickUpdate(): void {
    this.router.navigate(['/photo/update/' + this.photo._id]);
  }

  onClickDelete(): void {
    if(confirm("Are you sure to delete this Image?")) {
      this.apiService.deletePhoto(this.photo._id).subscribe(() => {
        this.router.navigate(['/']);
      })
    }
  }
}
