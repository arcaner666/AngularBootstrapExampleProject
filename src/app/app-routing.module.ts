import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ColorComponent } from './components/color/color.component';
import { HeadingsComponent } from './components/headings/headings.component';
import { HomeComponent } from './components/home/home.component';
import { ImageComponent } from './components/image/image.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { ParagraphComponent } from './components/paragraph/paragraph.component';
import { TableComponent } from './components/table/table.component';
import { VariableComponent } from './components/variable/variable.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'color', component: ColorComponent},
  { path: 'paragraph', component: ParagraphComponent},
  { path: 'headings', component: HeadingsComponent},
  { path: 'table', component: TableComponent },
  { path: 'image', component: ImageComponent },
  { path: 'jumbotron', component: JumbotronComponent },
  { path: 'button', component: ButtonsComponent },
  { path: 'variable', component: VariableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
