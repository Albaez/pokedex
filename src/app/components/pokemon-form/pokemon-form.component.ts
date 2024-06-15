import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificacionesService } from '../../service/notificaciones.service';

@Component({
  selector: 'app-pokemon-form',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-form.component.html',
  styleUrl: './pokemon-form.component.css'
})


export class PokemonFormComponent implements OnInit{


  mensaje: string=''
  constructor(private ruta: ActivatedRoute, private notificaciones: NotificacionesService){}
  
  ngOnInit(): void {
    this.ruta.queryParams.subscribe(params =>{
      this.mensaje = params['mensaje']

    })
  }

  agregarNotificacion(){
    this.notificaciones.agregarMensaje("Agregando mensaje desde pantalla uno")
  }
}
 