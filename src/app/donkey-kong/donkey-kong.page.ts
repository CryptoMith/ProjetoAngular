import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-donkey-kong',
  templateUrl: './donkey-kong.page.html',
  styleUrls: ['./donkey-kong.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DonkeyKongPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
