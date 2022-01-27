import { Component, OnInit } from '@angular/core';
import {Sort} from '@angular/material/sort';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {
  
  public Data: Array<InterfaceElements> = [
    { id: 0, name: "Jaime Payne", age: 19, sallary: 1200 },
    { id: 1, name: "Avery Reynolds", age: 29, sallary: 2010 },
    { id: 2, name: "Maxwell Cohen", age: 12, sallary: 2300 },
    { id: 3, name: "Skylar Warner", age: 8,  sallary: 2000 },
    { id: 4, name: "Glenn Hughes", age: 92, sallary: 3200 },
    { id: 5, name: "Kristopher Oliver", age: 32, sallary: 7200 },
    { id: 6, name: "Cristal Klein", age: 47, sallary: 9200 },
  ];

  sortedData: InterfaceElements[];

  constructor() { 
    this.sortedData = this.Data.slice();
  }
 
  public deleteItem(element: InterfaceElements){
    this.sortedData = this.sortedData.filter((item: InterfaceElements) => item.id !== element.id)
  }
  public addItem(){
    this.sortedData.push({
      id: Math.max.apply(Math, this.sortedData.map(function(o) {return o.id}))+1,
      name:    (<HTMLInputElement>document.getElementById('InputName')).value,
      age:     parseInt((<HTMLInputElement>document.getElementById('InputAge')).value),
      sallary: parseInt((<HTMLInputElement>document.getElementById('InputSallary')).value)
    });
  }
 
  public SortDesc(objField: string){
    if(objField === 'id'){
      this.sortedData.sort((a,b) => (a.id < b.id ? 1: -1) )
    }
    if(objField === 'name'){
      this.sortedData.sort((a,b) => (a.name < b.name ? 1: -1) )
    }
    if(objField === 'age'){
      this.sortedData.sort((a,b) => (a.age < b.age ? 1: -1) )
    }
    if(objField === 'sallary'){
      this.sortedData.sort((a,b) => (a.sallary < b.sallary ? 1: -1) )
    }
    
    
  }
  public SortAsc(objField: string){
    if(objField === 'id'){
      this.sortedData.sort((a,b) => (a.id > b.id ? 1: -1) )
    }
    if(objField === 'name'){
      this.sortedData.sort((a,b) => (a.name > b.name ? 1: -1) )
    }
    if(objField === 'age'){
      this.sortedData.sort((a,b) => (a.age > b.age ? 1: -1) )
    }
    if(objField === 'sallary'){
      this.sortedData.sort((a,b) => (a.sallary > b.sallary ? 1: -1) )
    }
  }




  ngOnInit(): void {  }
  
}


export interface InterfaceElements {
  id: number,
  name: string,
  age: number,
  sallary: number
}

