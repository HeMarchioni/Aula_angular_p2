import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})





export class HenriqueTaskService {


tarefas:string[]=[];



  constructor() { }



save(nome:string){
  this.tarefas.push(nome)
}


deleteByIndice(indice:number){
  this.tarefas.splice(indice,1)
}








}