import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  menuItems: { label: string, link: string }[] = [
    { label: 'Inicio', link: '/' },
    { label: 'Ventas', link: '/sales' },
    { label: 'Inventario', link: '/inventory' },
    { label: 'Tiendas', link: '/stores' },
  ];

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('token'); 
  }

  getName(): string | null {
    return sessionStorage.getItem('name');
  }

  hasRoleOne(): boolean {
    const role = sessionStorage.getItem('role');
    return role === '1';
  }

  logout(): void {
    sessionStorage.removeItem('token'); 
    sessionStorage.removeItem('role'); 
    sessionStorage.removeItem('name'); 
  }
}
