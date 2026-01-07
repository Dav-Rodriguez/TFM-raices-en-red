import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sbn-articles-list',
  templateUrl: './sbn-articles-list.component.html',
  styleUrls: ['./sbn-articles-list.component.scss'],
})
export class SbnArticlesListComponent implements OnInit {
  categoryTitle: string = '';
  categoryId: string = '';
  filteredArticles: any[] = [];

  // Base de datos de artículos
  allArticles = [
    // 1. Agua
    {
      id: 1,
      cat: 'agua',
      title:
        'Captación de agua de lluvia como estrategia comunitaria para la resiliencia hídrica',
      summary:
        'Este artículo explora la captación de agua de lluvia como una solución basada en la naturaleza aplicable en comunidades con acceso limitado al agua potable.',
      img: 'assets/repo/agua1.jpg',
    },
    {
      id: 2,
      cat: 'agua',
      title:
        'Restauración de riberas para la reducción del riesgo de inundaciones',
      summary:
        'La restauración ecológica de riberas fluviales se presenta como una estrategia efectiva para mitigar inundaciones y mejorar la calidad ambiental.',
      img: 'assets/repo/agua2.jpg',
    },
    {
      id: 3,
      cat: 'agua',
      title:
        'Infraestructura verde para la gestión sostenible de aguas urbanas',
      summary:
        'Se analizan soluciones como jardines de lluvia y pavimentos permeables para el manejo de aguas pluviales en entornos urbanos vulnerables.',
      img: 'assets/repo/agua3.jpg',
    },

    // 2. Biodiversidad
    {
      id: 4,
      cat: 'biodiversidad',
      title:
        'Corredores ecológicos comunitarios para la recuperación de la biodiversidad local',
      summary:
        'El artículo aborda la creación de corredores ecológicos a escala barrial como herramienta para reconectar ecosistemas fragmentados.',
      img: 'assets/repo/bio1.jpg',
    },
    {
      id: 5,
      cat: 'biodiversidad',
      title: 'Restauración participativa de suelos degradados',
      summary:
        'Se presenta la restauración de suelos mediante técnicas naturales y participación local como una oportunidad para recuperar servicios ecosistémicos.',
      img: 'assets/repo/bio2.jpg',
    },
    {
      id: 6,
      cat: 'biodiversidad',
      title:
        'Reforestación con especies nativas como estrategia de resiliencia territorial',
      summary:
        'Análisis de la reforestación desde una perspectiva social, ecológica y técnica, subrayando su impacto en la estabilidad del territorio.',
      img: 'assets/repo/bio3.jpg',
    },

    // 3. Seguridad alimentaria
    {
      id: 7,
      cat: 'alimentacion',
      title: 'Huertos comunitarios como herramienta de soberanía alimentaria',
      summary:
        'Los huertos comunitarios combinan producción de alimentos, cohesión social y educación ambiental en contextos urbanos y rurales vulnerables.',
      img: 'assets/repo/alimentacion1.jpg',
    },
    {
      id: 8,
      cat: 'alimentacion',
      title: 'Agroecología aplicada a pequeños sistemas productivos locales',
      summary:
        'El artículo explora principios de la agroecología y su aplicación práctica en comunidades que buscan mejorar su seguridad alimentaria.',
      img: 'assets/repo/alimentacion2.jpg',
    },
    {
      id: 9,
      cat: 'alimentacion',
      title:
        'Sistemas agroforestales para la diversificación productiva sostenible',
      summary:
        'Se describe cómo los sistemas agroforestales integran producción agrícola y conservación ambiental de forma sostenible.',
      img: 'assets/repo/alimentacion3.jpg',
    },

    // 4. Ciudades y hábitat
    {
      id: 10,
      cat: 'habitat',
      title: 'Espacios públicos verdes como infraestructura social y ambiental',
      summary:
        'El artículo analiza el rol de los espacios verdes urbanos en la calidad de vida, la adaptación climática y la cohesión social.',
      img: 'assets/repo/ciudades1.jpg',
    },
    {
      id: 11,
      cat: 'habitat',
      title:
        'Naturación urbana: cubiertas y muros verdes en contextos de bajos recursos',
      summary:
        'Se exploran soluciones de naturación urbana de bajo costo para mejorar el confort térmico y ambiental en viviendas comunitarias.',
      img: 'assets/repo/ciudades2.jpg',
    },
    {
      id: 12,
      cat: 'habitat',
      title:
        'Diseño participativo de espacios públicos basados en la naturaleza',
      summary:
        'El texto destaca el diseño participativo como metodología para integrar soluciones SbN en espacios públicos sostenibles.',
      img: 'assets/repo/ciudades3.jpg',
    },

    // 5. Cambio climático
    {
      id: 13,
      cat: 'clima',
      title:
        'Soluciones basadas en la naturaleza para la adaptación climática comunitaria',
      summary:
        'Se presentan estrategias SbN que permiten a comunidades vulnerables adaptarse a eventos climáticos extremos.',
      img: 'assets/repo/clima1.jpg',
    },
    {
      id: 14,
      cat: 'clima',
      title:
        'Infraestructura verde como herramienta de mitigación del cambio climático',
      summary:
        'El artículo analiza cómo la vegetación contribuye a la captura de carbono y la reducción de islas de calor urbanas.',
      img: 'assets/repo/clima2.jpg',
    },
    {
      id: 15,
      cat: 'clima',
      title: 'Planificación territorial resiliente frente al cambio climático',
      summary:
        'Se aborda la integración de criterios de resiliencia climática en la planificación territorial mediante SbN.',
      img: 'assets/repo/clima3.jpg',
    },

    // 6. Territorio y paisaje
    {
      id: 16,
      cat: 'territorio',
      title:
        'Paisajes productivos resilientes en territorios rurales vulnerables',
      summary:
        'El texto explora cómo el enfoque de paisaje integra producción, conservación y desarrollo comunitario.',
      img: 'assets/repo/territorio1.jpg',
    },
    {
      id: 17,
      cat: 'territorio',
      title: 'Ordenamiento territorial con enfoque ecosistémico',
      summary:
        'Se analiza la aplicación de criterios ecosistémicos en procesos de ordenamiento territorial participativo.',
      img: 'assets/repo/territorio2.jpg',
    },
    {
      id: 18,
      cat: 'territorio',
      title: 'Restauración del paisaje como estrategia de cohesión territorial',
      summary:
        'El artículo aborda la restauración del paisaje como herramienta para fortalecer identidades locales.',
      img: 'assets/repo/territorio3.jpg',
    },

    // 7. Comunidad y gobernanza
    {
      id: 19,
      cat: 'gobernanza',
      title:
        'Gobernanza comunitaria en proyectos de soluciones basadas en la naturaleza',
      summary:
        'Se examina el rol de la gobernanza local y la toma de decisiones participativa en proyectos SbN.',
      img: 'assets/repo/comunidad1.jpg',
    },
    {
      id: 20,
      cat: 'gobernanza',
      title:
        'Participación ciudadana como base de la sostenibilidad territorial',
      summary:
        'El texto destaca la participación activa de la comunidad como componente clave de la sostenibilidad.',
      img: 'assets/repo/comunidad2.jpg',
    },
    {
      id: 21,
      cat: 'gobernanza',
      title:
        'Redes de colaboración entre comunidades y profesionales voluntarios',
      summary:
        'Se analiza cómo las redes de colaboración fortalecen proyectos SbN de impacto social y ambiental.',
      img: 'assets/repo/comunidad3.jpg',
    },

    // 8. Métodos y herramientas
    {
      id: 22,
      cat: 'diseno',
      title: 'Metodologías participativas para el diseño de soluciones SbN',
      summary:
        'El artículo presenta metodologías de co-diseño aplicables en contextos comunitarios.',
      img: 'assets/repo/metodos1.jpg',
    },
    {
      id: 23,
      cat: 'diseno',
      title:
        'Herramientas digitales para el diagnóstico territorial participativo',
      summary:
        'Se explora el uso de herramientas digitales simples como apoyo al diagnóstico territorial.',
      img: 'assets/repo/metodos2.jpg',
    },
    {
      id: 24,
      cat: 'diseno',
      title: 'Prototipado y experimentación en proyectos SbN',
      summary:
        'El texto aborda el valor del prototipado como estrategia de aprendizaje y adaptación en proyectos SbN.',
      img: 'assets/repo/metodos3.jpg',
    },
  ];

  categoryMap: any = {
    agua: 'Agua y gestión hídrica',
    biodiversidad: 'Biodiversidad y restauración ecológica',
    alimentacion: 'Seguridad alimentaria y sistemas sostenibles',
    habitat: 'Ciudades, hábitat y espacio público',
    clima: 'Adaptación y mitigación al cambio climático',
    territorio: 'Gestión del territorio y paisaje',
    gobernanza: 'Comunidad, participación y gobernanza',
    diseno: 'Métodos, herramientas y diseño de SbN',
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.categoryId = params['id'];
      this.categoryTitle = this.categoryMap[this.categoryId] || 'Artículos SbN';
      this.filteredArticles = this.allArticles.filter(
        (a) => a.cat === this.categoryId
      );
    });
  }
}
