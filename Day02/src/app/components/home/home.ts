import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  department: string = 'All';
  itiTracks: { id: number; name: string; department: string }[];
  filteredTracks: { id: number; name: string; department: string }[];
  constructor() {
    this.itiTracks = [
      {
        id: 1,
        name: 'Professional Development',
        department: 'SD',
      },
      {
        id: 2,
        name: 'Java Development',
        department: 'java',
      },
      {
        id: 3,
        name: 'Dotnet',
        department: 'SD',
      },
      {
        id: 4,
        name: 'Android & IOS ',
        department: 'java',
      },
      {
        id: 5,
        name: '2d Graphics ',
        department: 'Graphics',
      },
      {
        id: 6,
        name: 'Motion graphics',
        department: 'Graphics',
      },
    ];
    this.filteredTracks = this.itiTracks;
  }

  filter() {
    this.department == 'All'
      ? (this.filteredTracks = this.itiTracks)
      : (this.filteredTracks = this.itiTracks.filter(
          (track) =>
            track.department.toLowerCase() == this.department.toLowerCase()
        ));
  }
}
