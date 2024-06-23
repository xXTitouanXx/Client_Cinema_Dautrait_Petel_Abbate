import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CharacterService } from '../services/character.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';// Assurez-vous d'importer correctement le modèle DTO
import { Character, CharacterUpdateDTO } from '../models/Character';

@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharacterComponent implements OnInit {
  characterForm!: FormGroup;
  characters: Character[] = [];

  constructor(private fb: FormBuilder, private characterService: CharacterService) {}

  ngOnInit(): void {
    this.characterForm = this.fb.group({
      id: [''], // Champ masqué pour l'ID du personnage
      name: ['', Validators.required],
      actorId: ['', Validators.required],
      movieId: ['', Validators.required],
      profilePath: [''],
      gender: [''],
      order: ['']
    });
    this.loadCharacters();
  }

  loadCharacters(): void {
    this.characterService.getAllCharacters().subscribe(
      (data: Character[]) => {
        this.characters = data;
      },
      (error) => {
        console.error('Erreur lors du chargement des personnages:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.characterForm.valid) {
      const formData: CharacterUpdateDTO = this.characterForm.value;
      // Ici vous pouvez appeler un service pour mettre à jour le personnage
      console.log('Formulaire soumis avec succès pour la mise à jour:', formData);
    } else {
      console.error('Le formulaire n\'est pas valide.');
    }
  }

  onUpdate(): void {
    // Méthode pour pré-remplir le formulaire avec les données du personnage à mettre à jour
    // Simulez l'utilisation d'un service pour obtenir les données du personnage à partir de son ID
    const characterToUpdate: CharacterUpdateDTO = {
      id: 1, // Remplacez par l'ID du personnage que vous souhaitez mettre à jour
      name: 'Nom du personnage', // Remplacez par le nom du personnage récupéré
      actorId: 2, // Remplacez par l'ID de l'acteur récupéré
      profilePath: 'chemin/vers/le/profil', // Remplacez par le chemin du profil récupéré
      gender: 1, // Remplacez par le genre récupéré
      order: 1 // Remplacez par l'ordre récupéré
    };

    // Pré-remplissez le formulaire avec les données du personnage à mettre à jour
    this.characterForm.patchValue(characterToUpdate);
  }

  onDelete(): void {
    // Méthode pour supprimer un personnage
    console.log('Suppression du personnage');
  }
}
