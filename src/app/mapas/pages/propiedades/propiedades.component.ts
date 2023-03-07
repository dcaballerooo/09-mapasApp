import { Component} from '@angular/core';


interface Propiedad {
  titulo: string;
  descripcion: string;
  lngLat: [number, number];
}

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
})
export class PropiedadesComponent  {

  propiedades: Propiedad[] = [
    {
      titulo: 'Casa residencial, Canadá',
      descripcion: 'Bella propiedad en Katana, Canadá',
      lngLat: [ -75.92722289474008, 45.280015511264466]
    },
    {
      titulo: 'Oficinas Bosonit Logroño',
      descripcion: 'Hermosas oficinas de Bosonit en la Gran Vía de Logroño',
      lngLat: [ -2.4483977191962083, 42.46375887950097 ]
    },
    {
      titulo: 'Apartamento, Argentina',
      descripcion: 'Lujoso apartamento en el corazón de Buenos Aires, Argentina',
      lngLat: [ -58.430166677283445, -34.57150108832866 ]
    },
    {
      titulo: 'Local comercial, España',
      descripcion: 'Local comercial disponible en Madrid, España, cerca de El Jardín Secreto.',
      lngLat: [ -3.7112735618380177, 40.42567285425766 ]
    },
  ]

  
}
