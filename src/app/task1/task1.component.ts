import { Component, OnInit } from '@angular/core';
import { T1ServiceService } from '../t1-service.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Album } from '../album';
@Component({
  selector: 'app-task1',
  standalone: true,
  providers: [T1ServiceService],
  imports: [HttpClientModule, CommonModule],
  templateUrl: './task1.component.html',
  styleUrl: './task1.component.css'
})
export class Task1Component implements OnInit {
  albums:Album[]=[];
  constructor(private t1service: T1ServiceService){}

ngOnInit(): void {
  // this.t1service.service(); task1
  this.t1service.getAlbum().subscribe({next:(data:Album[])=>{this.albums=data; console.log(this.albums);}});
  console.log(this.albums);
}

}
