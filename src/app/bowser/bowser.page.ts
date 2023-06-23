import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-bowser',
  templateUrl: './bowser.page.html',
  styleUrls: ['./bowser.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class BowserPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
