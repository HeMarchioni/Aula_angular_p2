import { Component, OnInit } from '@angular/core';
import { HenriqueTaskService } from '../henrique-task.service';

@Component({
  selector: 'app-henrique-home',
  templateUrl: './henrique-home.component.html',
  styleUrls: ['./henrique-home.component.css']
})
export class HenriqueHomeComponent implements OnInit {

  constructor( public HenriqueTaskService: HenriqueTaskService  ) { }


totalTarefas = 0;


  ngOnInit() {

  this.totalTarefas = this.HenriqueTaskService.tarefas.length


  }

}