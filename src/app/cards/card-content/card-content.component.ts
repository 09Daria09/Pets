import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-content.component.html',
  styleUrl: './card-content.component.css'
})
export class CardContentComponent implements OnInit {
  @Input() card: any;
  ageDescription: string = '';

  ngOnInit() {
    this.calculateAge();
  }

  private calculateAge() {
    if (this.card?.birthYear) {
      const birthdate = new Date(this.card.birthYear, (this.card.birthMonth ?? 0) - 1, this.card.birthDay ?? 1);
      const now = new Date();
      let years = now.getFullYear() - birthdate.getFullYear();
      let months = now.getMonth() - birthdate.getMonth();
      if (now.getDate() < birthdate.getDate()) {
        months--;
      }
      if (months < 0) {
        years--;
        months += 12;
      }

      const yearsText = years > 0 ? `${years} ${this.getPlural(years, 'year', 'years')}` : '';
      const monthsText = months > 0 ? `${months} ${this.getPlural(months, 'month', 'months')}` : '';
      this.ageDescription = `${yearsText}${years > 0 && months > 0 ? ' and ' : ''}${monthsText}`;

      if (!this.ageDescription) {
        this.ageDescription = 'A few weeks old';
      }
    }
  }

  private getPlural(n: number, singular: string, plural: string) {
    return n === 1 ? singular : plural;
  }
}
