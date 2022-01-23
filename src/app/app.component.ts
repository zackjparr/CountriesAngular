import { Component } from '@angular/core';
import { Country } from './Country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  countries: Country[] = [
    new Country("Shrekadonia", "English", "shrek.jpg", "Shrek", ["DarkGreen", "DarkOliveGreen", "Beige"]),
    new Country("Icantastan", "Icantaneese", "", "Jim", ["DeepPink", "DeepSkyBlue", "DarkOrange"]),
    new Country("Roman Empire", "Latin", "", "Julius Caesar", ["Red", "Gold", "White"])
  ];

  displayColors(index: number){
    ( <HTMLElement> document.getElementById(`Country${index}`) ).style.border = `1px solid ${this.countries[index].colors[0]}`;
    ( <HTMLElement> document.getElementById(`Country${index}`) ).style.backgroundColor = `${this.countries[index].colors[1]}`;
    ( <HTMLElement> document.getElementById(`Country${index}`) ).style.color = `${this.countries[index].colors[2]}`;

  }

  defaultColors(index: number){
    ( <HTMLElement> document.getElementById(`Country${index}`) ).style.border = "none";
    ( <HTMLElement> document.getElementById(`Country${index}`) ).style.backgroundColor = "white";
    ( <HTMLElement> document.getElementById(`Country${index}`) ).style.color = "black";
  }
}

