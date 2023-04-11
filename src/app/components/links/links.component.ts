import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-links',
  templateUrl: 'links.component.html',
  styleUrls: ['links.component.css'],
})
export class Links {
  @Input()
  button: string = 'Menu'
  @Input()
  text: string = 'Our offers'
  @Input()
  text1: string = 'Get a fast quote'
  constructor() {}
}
