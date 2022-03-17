  
import { NgModule } from '@angular/core'
import { Routes,RouterModule } from '@angular/router'
import { AppComponent } from './app.component'
import { HeroComponentComponent } from './hero-component/hero-component.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { HeroDetailsComponent } from './hero-details/hero-details.component'


const routes : Routes = [
    {path:'',redirectTo:'heroes',pathMatch:'full'},
    {path: 'heroes',component: HeroComponentComponent},
    {path: 'dashboard',component: DashboardComponent },
    {path:'details/:id',component: HeroDetailsComponent},
    
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}