import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { AboutMeComponent } from './componentes/sub-componentes/about-me/about-me.component';
import { ControlsComponent } from './componentes/sub-componentes/controls/controls.component';
import { EducationComponent } from './componentes/sub-componentes/education/education.component';
import { ProjectsComponent } from './componentes/sub-componentes/projects/projects.component';
import { SkillsComponent } from './componentes/sub-componentes/skills/skills.component';
import { PortfolioService } from './servicios/portfolio.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AboutMeComponent,
    ControlsComponent,
    EducationComponent,
    ProjectsComponent,
    SkillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
