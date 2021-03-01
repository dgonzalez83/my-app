import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clickHandler() {
    alert('Click works!')
  }

  radioSelect = 'Pendiente de seleccion' as string

  handleRadio(event: Event) {
    (<HTMLInputElement>event.target).value === 'true'
      ? this.radioSelect = 'se ha seleccionado registrado'
      : this.radioSelect = 'se ha seleccionado no registrado'
    
  }  

}
