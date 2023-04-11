import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  raweimu: string = ' '
  rawtriz: string = ' '
  rawpaiq: string = ' '
  rawp88g: string = ' '
  raw208z: string = ' '
  rawwakn: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Remarkable template')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Remarkable template',
      },
    ])
  }
}
