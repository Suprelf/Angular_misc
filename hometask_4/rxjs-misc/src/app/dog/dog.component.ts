import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.scss']
})
export class DogComponent implements OnInit {
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.getJson()
  }

  dog_json: any;
  subscribe_repeat: any;
  
  public getJson(){
    this.subscribe_repeat = timer(0,5000).subscribe(() => {
      this.http.get('https://random.dog/woof.json').subscribe(val => {
      this.dog_json = val;
      console.log(this.dog_json);
      });
    });    
  }
  

  
}
