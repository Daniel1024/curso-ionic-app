import { Injectable } from '@angular/core';
import { ListaModel } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {
  listas: ListaModel[] = [];

  constructor() {
    const lista1 = new ListaModel('Recolectar piedras del infinito');
    const lista2 = new ListaModel('Héroes a desaparecer');

    this.listas.push(lista1, lista2);
  }
}
