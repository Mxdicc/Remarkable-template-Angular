import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { Card } from './card/card.component'
import { Links } from './links/links.component'
import { Branding } from './branding/branding.component'
import { Footer } from './footer/footer.component'

@NgModule({
  declarations: [Card, Links, Branding, Footer],
  imports: [CommonModule, RouterModule],
  exports: [Card, Links, Branding, Footer],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
