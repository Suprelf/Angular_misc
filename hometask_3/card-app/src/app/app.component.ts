import { Component, QueryList, ViewChildren, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'card-app';
  clicker = 0;
  
  @ViewChildren('bodycontent') aoao !: QueryList<any>;

  public Btnclick(){
    if (this.clicker % 2 == 0) {
      this.aoao.forEach((element)=>{
        element.nativeElement.style.display = 'none';
      });
      this.clicker+=1;
    } else {
      this.aoao.forEach((element)=>{
        element.nativeElement.style.display = 'block';
      });
      this.clicker+=1;
    }

     
  }

  Contents = [
    { id: 0, head_val: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      body_val: "Maecenas aliquet eget arcu at venenatis. Sed hendrerit vitae purus sit amet sodales. Donec sit amet aliquet ante. Curabitur mi massa, volutpat eu auctor eget, vehicula ac sapien."},
    { id: 1, head_val: "Lorem ipsum dolor sit amet.", 
      body_val: "Praesent efficitur iaculis erat in faucibus. Mauris pretium, risus ut pharetra ultricies, tellus sapien sodales quam, sed auctor nisi dolor eu elit."},
    { id: 2, head_val: "Maecenas non turpis urna.",
      body_val: "Donec vitae est vitae est porttitor porta. Aenean tempor turpis sed massa volutpat tempor. Integer volutpat, mi vitae rhoncus egestas."},
    { id: 3, head_val: "Fusce sollicitudin ante ac suscipit pellentesque.",
      body_val: "Ferat leo commodo nibh, vel rhoncus erat ipsum ac odio. Pellentesque porttitor consectetur viverra."},
    { id: 4, head_val: "Integer finibus luctus vehicula. ",
      body_val: "Nunc non diam eleifend, scelerisque nunc in, aliquam nulla. "},
    { id: 5, head_val: "Maecenas dapibus nibh sit amet massa molestie dictum.",
      body_val: "Nam blandit magna neque, a tincidunt ipsum malesuada sit amet. Cras vel tellus libero. Vestibulum sit amet rutrum lacus."},
  ];



}
