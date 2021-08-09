import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  editar() {
    
    this.router.navigate(['contactos/crear'])
  }
  crear(nombre:String){
    let params:NavigationExtras={
      queryParams:{
        nombre:nombre,
        edad:15
      }
    }
    this.router.navigate(['contactos/crear'],params)
  }
}
