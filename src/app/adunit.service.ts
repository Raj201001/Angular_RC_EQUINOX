import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AdUnit } from './components/index/AdUnit';

@Injectable({
  providedIn: 'root'
})
export class AdunitService {

  uri = 'http://localhost:4000/adunits';

  constructor(private http: HttpClient) { }

  addAdUnit(video_name : String, video_link : String, song_type : String, song_name : String) {
    const obj = {
      video_name: video_name,
      video_link : video_link,
      song_type : song_type,
      song_name : song_name
    };
    return this.http.post(`${this.uri}/add`, obj);
  }

  getAdUnits() {
    return this
           .http
           .get(`${this.uri}`);
}
editAdUnit(id) {
  return this
            .http
            .get(`${this.uri}/edit/${id}`);
}

updateAdUnit(video_name :String, video_link : String, song_type :String, song_name :String, id) {

  const obj = {
      video_name: video_name,
      video_link : video_link,
      song_type : song_type,
      song_name : song_name
  };
   return this
    .http
    .post(`${this.uri}/update/${id}`, obj);
}

  deleteAdUnit(id) {
    return this
              .http
              .get(`${this.uri}/delete/${id}`);
  }
}
