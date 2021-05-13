import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Photo } from '../photo';

@Component({
  selector: 'app-photo-thumb',
  templateUrl: './photo-thumb.component.html',
  styleUrls: ['./photo-thumb.component.css']
})
export class PhotoThumbComponent implements OnInit {

  @Input() photo: Photo;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onClickDisplay(id: string): void {
    this.router.navigate(['/photo/' + id]);
  }
}
