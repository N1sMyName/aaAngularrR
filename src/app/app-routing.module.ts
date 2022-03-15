  
import { NgModule } from '@angular/core'
import { Routes,RouterModule } from '@angular/router'
import { NewOneComponent } from './new-one/new-one.component'

const routes : Routes = [
    {path: '',component: NewOneComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}