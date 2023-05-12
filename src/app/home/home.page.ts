import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule], 
})
export class HomePage {
  produtos = [
    {id: 0, nome: 'PS4', preco: 'R$ 2000', marca: 'Sony', image: 'https://images.pexels.com/photos/2520829/pexels-photo-2520829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {id: 1, nome: 'PS5', preco: 'R$ 6000', marca: 'Sony', image: 'https://images.pexels.com/photos/13189290/pexels-photo-13189290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {id: 2, nome: 'Polystation', preco: 'R$ 200', marca: 'Polishop', image: 'https://i0.wp.com/www.memoriabit.com.br/wp-content/uploads/2011/08/polystation-slim-banner.jpg?fit=741%2C483&ssl=1'},
    {id: 3, nome: 'Super Nintendo', preco: 'R$ 900', marca: 'Nintendo', image: 'https://images.pexels.com/photos/9201281/pexels-photo-9201281.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {id: 4, nome: 'Super NES', preco: 'R$ 250', marca: 'Super Tech', image: 'https://wx.mlcdn.com.br/ponzi/production/portaldalu/55722.jpg'},
    {id: 5, nome: 'Mega Drive', preco: 'R$300', marca: 'Sega', image: 'https://a-static.mlcdn.com.br/800x560/console-mega-drive-1-joystick-22-jogos-classicos-na-memoria-tectoy/magazineluiza/043075800/e10ed1a3465f94a20dcc8a57b2fac72a.jpg'}
  ];
  
  alertButtons = ['Ok'];
}
