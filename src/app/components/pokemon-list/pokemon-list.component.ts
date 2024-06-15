import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDetallePokemon } from '../../interfaces/IDetallePokemon';
import { IPokemon } from '../../interfaces/IPokemon';
import { IPokemonAbility } from '../../interfaces/IPokemonAbility';
import { NotificacionesService } from '../../service/notificaciones.service';
import { PokemonService } from '../../service/pokeapi.service';


@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css'
})
export class PokemonListComponent implements OnInit {
  conteo: number = 0
  pokemons: IPokemon[] = []
  detallesPokemon: IDetallePokemon[] = []
  abilitysPokemon: IPokemonAbility[] = []
  limite: number = 50

  constructor(private PokemonService: PokemonService, private ruta: ActivatedRoute, private notificaciones: NotificacionesService){}

  ngOnInit(): void {
    this.ruta.queryParams.subscribe(params => {
      const limiteParametro: number | undefined = params['limite']
      if(limiteParametro){
        this.limite = params['limite']
      }else{
        this.limite = 50
      }
    })

    this.PokemonService.getPokemons(this.limite).subscribe(pokemons =>{
      this.conteo = pokemons.count
      this.pokemons = pokemons.results

      this.pokemons.forEach(detalle =>{
        this.PokemonService.getDetallesPokemon(detalle.url).subscribe(detallePokemon =>{
          this.detallesPokemon.push(detallePokemon)

      
      

        })
      })
      
    })
  }

  agregarNotificacionPantallaDos(){
    this.notificaciones.agregarMensaje("Agregando mensaje desde pantalla dos")
  }
}
