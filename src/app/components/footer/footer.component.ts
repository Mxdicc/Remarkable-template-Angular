import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.css'],
})
export class Footer {
  @Input()
  Text5: string = 'Contact'
  @Input()
  Text9: string = 'Facebook'
  @Input()
  Text1: string = 'Training\n'
  @Input()
  Copyright: string = '©2022 Product Calgary. All Rights Reserved.'
  @Input()
  image_alt: string = 'image'
  @Input()
  Text: string = 'About'
  @Input()
  text: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.'
  @Input()
  image_src: string = '/assets/playground_assets/group%201639.svg'
  @Input()
  Text3: string = 'Membership'
  @Input()
  text1: string = 'office@remarkable.template'
  @Input()
  Text8: string = 'Twitter'
  @Input()
  Text4: string = 'Blog'
  @Input()
  Text6: string = 'Linkedin'
  @Input()
  Text2: string = 'Events'
  @Input()
  text2: string = '+0 222.345.987'
  @Input()
  image_alt1: string = 'image'
  @Input()
  image_src1: string = '/assets/playground_assets/group%201640.svg'
  @Input()
  Text7: string = 'Instagram'
  constructor() {}
}
