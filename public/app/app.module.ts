import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }      from './heroes.component';
import { HeroService }          from './hero.service';
import { DashboardComponent }   from './dashboard.component';
import { HeroSearchComponent }  from './hero-search.component';
import { UsersComponent }       from './users.component';
import { UsersService }         from './users.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [ 
  	BrowserModule,
  	FormsModule,
    HttpModule,
    //InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  declarations: [ 
  	AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent,
    UsersComponent
  ],
  providers: [
    HeroService,
    UsersService
  ],
  bootstrap: [ 
  	AppComponent 
  ]  
})
export class AppModule { }
