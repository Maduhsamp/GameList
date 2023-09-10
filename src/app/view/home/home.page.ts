import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Itens } from 'src/app/model/entities/itens/Itens';
import { ItensService } from 'src/app/model/services/itens.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public listaJogos : Itens[] = [];
  constructor(private router : Router, private itensService : ItensService) {
    this.listaJogos = this.itensService.obterTodos();
  }

  irParaCadastro(){
    this.router.navigate(["/cadastro"]);
  }

  editar(indice : number){
    this.router.navigate(["/editar", indice]);
  }
}
