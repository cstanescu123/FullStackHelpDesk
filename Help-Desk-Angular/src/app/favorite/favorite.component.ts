import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { Ticket } from '../models/Ticket';
import { TicketsService } from '../tickets.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  
  tickets$ = this.ticketsService.favoriteTickets(0); 
  
   tickets: Ticket[] = [];

  constructor(private ticketsService: TicketsService) { }

  favoriteTickets(id: number){
    this.ticketsService.favoriteTickets(id).pipe(
      switchMap(() => this.ticketsService.getTickets())
    ).subscribe((tickets: Ticket[]) =>{
      this.tickets = tickets
    });
  }

  ngOnInit(): void {
  }

}
