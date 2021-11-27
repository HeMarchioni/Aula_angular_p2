import { Component, OnInit } from '@angular/core';
import { HenriqueTaskService } from '../henrique-task.service';

@Component({
  selector: 'app-henrique-task',
  templateUrl: './henrique-task.component.html',
  styleUrls: ['./henrique-task.component.css']
})
export class HenriqueTaskComponent implements OnInit {


  nome:string;


  constructor(public HenriqueTaskService: HenriqueTaskService ) { }

  ngOnInit() {
  }


onSubmit(){

  this.HenriqueTaskService.save(this.nome)
}


}