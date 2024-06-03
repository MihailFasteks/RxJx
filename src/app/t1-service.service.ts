import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {Album} from "./album";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class T1ServiceService {

  constructor(private http: HttpClient) { }


  getAlbum(): Observable<Album[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums').pipe(
      map((data: any[]) => {
       
        return data.map(item => new Album(item.id, item.title));
      })
    );
  }

//     service() {
//       this.http.get('https://jsonplaceholder.typicode.com/albums').subscribe(res=>{console.log(res)});
//  }  

}
