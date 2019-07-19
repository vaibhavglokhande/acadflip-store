import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { EvenOddDirective } from './even-odd/even-odd.directive';
import { NewComponentComponent } from './new-component/new-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialImportsModule } from './material-imports/material-imports.module';
import { CharacterCountPipe } from './character-count/character-count.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    EvenOddDirective,
    NewComponentComponent,
    CharacterCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialImportsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
