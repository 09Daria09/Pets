import { Component } from '@angular/core';
import { petsData } from '../pets-data';
import { CardContentComponent } from './card-content/card-content.component';
import { CommonModule } from '@angular/common'
@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CardContentComponent, CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  cards = petsData;

}
