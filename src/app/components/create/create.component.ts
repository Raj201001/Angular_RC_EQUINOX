import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AdunitService } from '../../adunit.service';
import { AdUnit } from '../index/AdUnit';
import { Router } from '@angular/router';
import { IndexComponent } from '../index/index.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;
  adunits: AdUnit[];

  constructor(private adunitservice: AdunitService, private fb: FormBuilder, private router : Router) { 
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      video_name: ['', Validators.required ],
      video_link: ['', Validators.required ],
      song_type: ['', Validators.required ],
      song_name: ['', Validators.required ]
   });
  }

  addAdUnit(video_name : String, video_link : String, song_type : String, song_name : String) {
    this.adunitservice.addAdUnit(video_name, video_link, song_type, song_name).subscribe(() => {
      this.router.navigate(['/index']);
    });
}

  ngOnInit() {
  }

}
