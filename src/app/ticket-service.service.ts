import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from './Ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketServiceService {

  constructor(public httpClient: HttpClient) { }
  insertTicket(ticket: Ticket): Observable<Ticket> {
    return this.httpClient.post<Ticket>('http://localhost:8080//help/insertTicket', {
      userId: ticket.userId,
      issue: ticket.issue,
      description: ticket.description
    }, { responseType: "json" });
  }


  public getAllRequests(): Observable<Object> {
    return this.httpClient.get<Object>("http://localhost:8080/getAllHelpRequests/", { responseType: "json" });
  }
  
  updateTicket(ticket: Ticket): Observable<Ticket> {
    return this.httpClient.post<Ticket>('http://localhost:8080/updateResolution', {
      requestId: ticket.requestId,
      resolution: ticket.resolution
    }, { responseType: "json" });
  }



}

