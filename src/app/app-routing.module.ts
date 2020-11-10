import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ContentComponent } from './components/content/content.component';
import { HomeComponent } from './components/home/home.component';
import { TableComponent } from './components/table/table.component';
import { VariableComponent } from './components/variable/variable.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'content', component: ContentComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'table', component: TableComponent },
  { path: 'button', component: ButtonsComponent },
  { path: 'variable', component: VariableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
