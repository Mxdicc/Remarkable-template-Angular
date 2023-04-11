import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-branding',
  templateUrl: 'branding.component.html',
  styleUrls: ['branding.component.css'],
})
export class Branding {
  @Input()
  text: string = 'Remarkable'
  @Input()
  text1: string = 'Remarkable'
  constructor() {}
}
