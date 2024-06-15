import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { PokemonFormComponent } from './components/pokemon-form/pokemon-form.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { NotificacionesService } from './service/notificaciones.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgFor, PokemonFormComponent, PokemonListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'pokedex';
  constructor(public notificaciones: NotificacionesService){}
  ngOnInit(): void {
    
  }
}
