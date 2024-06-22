import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {ActorService} from "../services/actor.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-actors',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './actors.component.html',
  styleUrl: './actors.component.scss'
})
export class ActorsComponent implements OnInit{
  actors: any[] = [];

  constructor(private actorService: ActorService) { }

  ngOnInit(): void {
    this.actorService.getActeurs().subscribe(
      (data) => {
        this.actors = data;
      },
      (error) => {
        console.error('Error fetching actors', error);
      }
    );
  }
}
