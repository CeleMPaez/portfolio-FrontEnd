import { Component } from '@angular/core';
import { PortfolioService } from './servicios/portfolio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'maqueta_angular';

  constructor(private datosPortfolio: PortfolioService) {}

  ngOnInit(): void {
    this.datosPortfolio.obtenerDatos();
  }
}
