import { Injectable, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  urlImg: string;
}

@Injectable()
export class ProductoService {

  constructor(private http: HttpClient) {
    console.log("servicio creado");
  }


  getPersonas(): Observable<Producto[]> { 
    const headers = { 'Content-Type': 'application/json' };
    return this.http.get<Producto[]>('http://localhost:8891/api/productos', { headers });
  }
}



