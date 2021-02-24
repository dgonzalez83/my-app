import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  name = 'Daniel'
  lastname= 'Gonzalez Jimenez'
  age = 37

  clickHandler(payload: string) {
    console.log(payload)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
