import {Component, OnInit} from '@angular/core';
import {Actor} from "../../models/actor";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {ActorService} from "../../services/actor.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-actor-information',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './actor-information.component.html',
  styleUrl: './actor-information.component.scss'
})
export class ActorInformationComponent implements OnInit {
  actor: Actor | undefined;
  characters: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private actorService: ActorService
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      if (id) {
        this.actorService.getActeurById(id).subscribe(actor => {
          this.actor = actor;
        });
        this.loadCharacters(id);
      }
    });
  }

  loadCharacters(id: number): void {
    this.actorService.getCharactersByActor(id).subscribe(data => {
      this.characters = data;
    });
  }
}
