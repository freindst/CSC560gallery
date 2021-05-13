import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Photo } from '../photo';

@Component({
  selector: 'app-input-photo-form',
  templateUrl: './input-photo-form.component.html',
  styleUrls: ['./input-photo-form.component.css']
})
export class InputPhotoFormComponent implements OnInit {

  formGroup: FormGroup;

  file: File = null;

  buttonText: string = '';

  imgSrc: string = '/assets/blank.png';

  isUpdate = false;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      _id: [''],
      filename: ['', Validators.required],
      type: ['', Validators.required],
      title: ['', Validators.required],
      description: [''],
      location: [''],
      people: [''],
      datetime: ['', Validators.required],
      comment: ['', Validators.required],
      path: ['']
    });

    this.route.url.subscribe(segments => 
      {
      this.buttonText = segments[1].path.toUpperCase();
      this.isUpdate = this.buttonText !== "CREATE";
      if (this.isUpdate) {
        this.apiService.showPhoto(segments[2].path).subscribe( data => {
          let photo = new Photo().populate(data['photo']);
          this.formGroup.patchValue({
            "_id": photo._id,
            "filename": photo.filename,
            "type": photo.type,
            "title": photo.title,
            "description": photo.description,
            "location": photo.location,
            "people": photo.people,
            "datetime": photo.datetime,
            "comment": photo.comment,
            "path": photo.path
          });
          this.imgSrc = photo.getImgSrc();
        });
      }
    })
  }

  onChange(event){
    this.file = event.target.files[0];
    this.formGroup.patchValue({"filename": this.file.name});
    let reader =  new FileReader();
    reader.readAsDataURL(this.file);
    reader.onload = () => {
      this.imgSrc = reader.result as string;
    }
  }

  onSubmit()
  {
    let formValue = this.formGroup.value;
    var formData = new FormData();
    for(let key in formValue) {
      formData.append(key, formValue[key]);
    }
    formData.append('file', this.file);
    if (this.isUpdate) {
      this.apiService.putPhoto(formData, formValue["_id"]).subscribe(photo => this.router.navigate(
        ['/photo/' + formValue["_id"]]
      ));
    } else {
      this.apiService.postPhoto(formData).subscribe(photo => this.router.navigate(
        ['/photo/' + photo._id]
      ));
    }
  }
}
