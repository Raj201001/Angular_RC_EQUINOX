import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AdUnit } from '../index/AdUnit';
import { AdunitService } from '../../adunit.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  adunit: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private adunitservice: AdunitService,
    private fb: FormBuilder) {
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

    updateAdUnit(video_name : String, video_link : String, song_type : String, song_name : String) {
      this.route.params.subscribe(params => {
          this.adunitservice.updateAdUnit(video_name, video_link, song_type, song_name, params['id']).subscribe(() => {
            this.router.navigate(['/index']);
          });;
      });
    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        this.adunitservice.editAdUnit(params['id']).subscribe(res => {
          this.adunit = res;
      });
    });
  }
}
