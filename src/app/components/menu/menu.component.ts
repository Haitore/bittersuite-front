import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuItems: { label: string, link: string }[] = [
    { label: 'Inicio', link: '/' },
    { label: 'Ventas', link: '/' },
    { label: 'Inventario', link: '/' },
    { label: 'Tiendas', link: '/' },
    { label: 'Cerrar sesion', link: '/' }
  ];

  getMenuClass(index: number): string {
    const classes = [ 'border-primary'];
    return classes[index % classes.length];
  }
}
