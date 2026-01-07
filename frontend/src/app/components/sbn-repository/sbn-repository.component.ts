import { Component } from '@angular/core';

@Component({
  selector: 'app-sbn-repository',
  templateUrl: './sbn-repository.component.html',
  styleUrls: ['./sbn-repository.component.scss'],
})
export class SbnRepositoryComponent {
  categories = [
    { id: 'agua', name: 'Agua y gestión hídrica', icon: 'opacity' },
    {
      id: 'biodiversidad',
      name: 'Biodiversidad y regeneración',
      icon: 'eco',
    },
    {
      id: 'alimentacion',
      name: 'Seguridad alimentaria',
      icon: 'restaurant',
    },
    {
      id: 'habitat',
      name: 'Hábitat y espacio público',
      icon: 'location_city',
    },
    {
      id: 'clima',
      name: 'Mitigación al cambio climático',
      icon: 'wb_sunny',
    },
    {
      id: 'territorio',
      name: 'Gestión del territorio',
      icon: 'landscape',
    },
    {
      id: 'gobernanza',
      name: 'Comunidad y gobernanza',
      icon: 'groups',
    },
    {
      id: 'diseno',
      name: 'Herramientas y diseño de SbN',
      icon: 'architecture',
    },
    //{ id: 'casos', name: 'Prácticas & aprendizajes', icon: 'auto_stories' },
  ];
}
