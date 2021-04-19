import { LoginComponent } from './login.component'
import { ProfileComponent } from './profile.component'

export const userRoutes = [
  {path: 'profile', component: ProfileComponent}, //--The actual route would be /user/profile, the /user is added to the routes.ts
  {path: 'login', component: LoginComponent} //--The actual route would be /user/profile, the /user is added to the routes.ts  
]
