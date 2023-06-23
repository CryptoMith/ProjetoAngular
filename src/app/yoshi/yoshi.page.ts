import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-yoshi',
  templateUrl: './yoshi.page.html',
  styleUrls: ['./yoshi.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class YoshiPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
