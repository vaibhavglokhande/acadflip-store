import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { EvenOddDirective } from './even-odd/even-odd.directive';
import { NewComponentComponent } from './new-component/new-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialImportsModule } from './material-imports/material-imports.module';
import { CharacterCountPipe } from './character-count/character-count.pipe';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormAdvancedComponent } from './reactive-form-advanced/reactive-form-advanced.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    EvenOddDirective,
    NewComponentComponent,
    CharacterCountPipe,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    ReactiveFormAdvancedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialImportsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
