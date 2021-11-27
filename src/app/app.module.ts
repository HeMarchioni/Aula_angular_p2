import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule , Routes} from '@angular/router';
import { HenriqueTaskService } from './henrique-task.service';
import { HenriqueTaskComponent } from './henrique-task/henrique-task.component';
import { HenriqueHomeComponent } from './henrique-home/henrique-home.component';




const routes: Routes = [

  {path: '',redirectTo: '/home', pathMatch:'full' },
  {path: 'home',component: HenriqueHomeComponent},
  {path: 'tarefas',component: HenriqueTaskComponent},



];




@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HelloComponent,HenriqueTaskComponent,HenriqueHomeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
