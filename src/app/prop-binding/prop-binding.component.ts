import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prop-binding',
  templateUrl: './prop-binding.component.html',
  styles: [
  ]
})
export class PropBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  propChecked = false

  handleChecked() {
    this.propChecked = !this.propChecked
  }


}
