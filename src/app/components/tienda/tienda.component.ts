
import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tiendax } from "./../modelos/tienda";
@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})

export class TiendaComponent {

  modelo: tiendax[] = []


  http = inject(HttpClient);

  ngOnInit() {

    this.http.get<tiendax[]>('https://api.escuelajs.co/api/v1/products').subscribe(
      (res) =>{
        this.modelo = res
        console.log(this.modelo);

      },
      (err) =>{
        console.log(err);
      }

    )

  };


}








