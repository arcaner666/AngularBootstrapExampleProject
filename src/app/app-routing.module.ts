import { DirectiveComponent } from './components/directive/directive.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdvRegSystemComponent } from './components/adv-reg-system/adv-reg-system.component';
import { AlertComponent } from './components/alert/alert.component';
import { AngularComponent } from './components/angular/angular.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CardComponent } from './components/card/card.component';
import { ColorComponent } from './components/color/color.component';
import { DetayComponent } from './components/detay/detay.component';
import { EtradeComponent } from './components/etrade/etrade.component';
import { FormCheckComponent } from './components/form-check/form-check.component';
import { FormControlComponent } from './components/form-control/form-control.component';
import { HeadingsComponent } from './components/headings/headings.component';
import { HomeComponent } from './components/home/home.component';
import { ImageComponent } from './components/image/image.component';
import { InputAccessComponent } from './components/input-access/input-access.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { KatduzenlesilComponent } from './components/katduzenlesil/katduzenlesil.component';
import { ListComponent } from './components/list/list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NgModelComponent } from './components/ng-model/ng-model.component';
import { NgTemplateComponent } from './components/ng-template/ng-template.component';
import { ParagraphComponent } from './components/paragraph/paragraph.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { RegistrationFormComponent } from './components/registration-form/registration-form.component';
import { RegistrationSystemComponent } from './components/registration-system/registration-system.component';
import { ServiceComponent } from './components/service/service.component';
import { TableComponent } from './components/table/table.component';
import { UrunduzenlesilComponent } from './components/urunduzenlesil/urunduzenlesil.component';
import { VariableComponent } from './components/variable/variable.component';
import { PipeComponent } from './components/pipe/pipe.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'color', component: ColorComponent },
  { path: 'paragraph', component: ParagraphComponent },
  { path: 'headings', component: HeadingsComponent },
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
  { path: 'angular', component: AngularComponent },
  { path: 'form-control', component: FormControlComponent },
  { path: 'form-check', component: FormCheckComponent },
  { path: 'registration-form', component: RegistrationFormComponent },
  { path: 'ng-template', component: NgTemplateComponent },
  { path: 'input-access', component: InputAccessComponent },
  { path: 'ng-model', component: NgModelComponent },
  { path: 'registration-system', component: RegistrationSystemComponent },
  { path: 'adv-reg-system', component: AdvRegSystemComponent },
  { path: 'reactive-form', component: ReactiveFormComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'detay/:id', component: DetayComponent },
  { path: 'etrade', component: EtradeComponent },
  { path: 'katduzenlesil/:id/:islem', component: KatduzenlesilComponent },
  { path: 'urunduzenlesil/:id/:islem', component: UrunduzenlesilComponent },
  { path: 'directive', component: DirectiveComponent },
  { path: 'pipe', component: PipeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
