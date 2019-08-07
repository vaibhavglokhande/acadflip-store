import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterCountPipe } from './basics/character-count/character-count.pipe';
import { EvenOddDirective } from './basics/even-odd/even-odd.directive';
import { HelloWorldComponent } from './basics/hello-world/hello-world.component';
import { MaterialImportsModule } from './basics/material-imports/material-imports.module';
import { NewComponentComponent } from './basics/new-component/new-component.component';
import { ReactiveFormAdvancedComponent } from './basics/reactive-form-advanced/reactive-form-advanced.component';
import { ReactiveFormComponent } from './basics/reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './basics/template-driven-form/template-driven-form.component';

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
