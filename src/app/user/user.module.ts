import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { userRoutes } from './user.routes'
import { ProfileComponent } from './profile.component'

@NgModule({
  imports: [
    CommonModule,//--Use CommonModule in feature/lazy-loadable module instead of BrowserModule that is used in app.module.ts
    RouterModule.forChild(userRoutes)
  ],
  declarations: [
    ProfileComponent
  ],
  providers: [

  ]
})
export class UserModule { }