import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductoService, Producto } from '../../servicios/producto.service';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  productos: Producto[];
  constructor(private servicio:ProductoService) { }

  ngOnInit(): void {
     this.servicio.getPersonas().subscribe(t => this.productos=t);
  }

}
