import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-toad',
  templateUrl: './toad.page.html',
  styleUrls: ['./toad.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ToadPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
