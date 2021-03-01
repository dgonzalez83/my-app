import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { ButtonComponent } from './button/button.component';
import { PropBindingComponent } from './prop-binding/prop-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosComponent,
    EmpleadoComponent,
    ButtonComponent,
    PropBindingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
