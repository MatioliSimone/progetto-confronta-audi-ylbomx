import { Component, Input, OnInit } from '@angular/core';
import { Modello } from '../common/modello.model';
import { ElencoModelliService } from '../common/elenco-modelli.service';
import { StatoService } from '../common/stato.service';

  @Component({
  selector: 'app-visualizza-modelli',
  templateUrl: './visualizza-modelli.component.html',
  styleUrls: ['./visualizza-modelli.component.css']
})

export class VisualizzaModelliComponent implements OnInit {

  @Input() mioModello: Modello;
  elencoModelli : Modello[];
  corrente : number;

  constructor(private elencoServ : ElencoModelliService, private servizio: StatoService) {}

  ngOnInit() {
    this.corrente = 0;
    this.elencoModelli = this.elencoServ.elenco;
  }
  
  addConfronto(){
    if(this.servizio.getContatore() >= 0 && this.servizio.getContatore() < 2){
      this.servizio.incContatore();
      console.log(this.servizio.getContatore());
    }
    else if(this.servizio.getContatore() == 2){
      this.servizio.setContatoreTrue();
        console.log("adesso sono vera");
    }
  }

  remConfronto() {
    if(this.servizio.getContatore() > 0)
      this.servizio.decContatore();;
    console.log(this.servizio.getContatore());
  }

}