import { Injectable } from '@angular/core';
import { ListaModel } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {
  listas: ListaModel[] = [];

  constructor() {
    console.log('Servicio inicializado');
  }
}
