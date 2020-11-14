import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlertComponent } from './components/alert/alert.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardComponent } from './components/card/card.component';
import { ColorComponent } from './components/color/color.component';
import { HeadingsComponent } from './components/headings/headings.component';
import { HomeComponent } from './components/home/home.component';
import { ImageComponent } from './components/image/image.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { ListComponent } from './components/list/list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ParagraphComponent } from './components/paragraph/paragraph.component';
import { TableComponent } from './components/table/table.component';
import { TsButtonComponent } from './components/ts-button/ts-button.component';
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
  { path: 'variable', component: VariableComponent },
  { path: 'alert', component: AlertComponent },
  { path: 'list', component: ListComponent },
  { path: 'card', component: CardComponent },
  { path: 'navigation', component: NavigationComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'ts-button', component: TsButtonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
