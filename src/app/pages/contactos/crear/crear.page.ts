import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.page.html',
  styleUrls: ['./crear.page.scss'],
})
export class CrearPage implements OnInit {

  nombre:String
  edad:any
  contacto
  constructor(private routes:ActivatedRoute) { 
    routes.queryParams.subscribe(params => {
      console.log(params)
      this.nombre=params.nombre
      this.edad=params.edad
    })
  }

  ngOnInit() {
  }

}
