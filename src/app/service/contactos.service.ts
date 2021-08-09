import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {
  codigo: Int16Array;
    nombre:string;
    numero:string;
    direccion:string;

  constructor() { }
}
