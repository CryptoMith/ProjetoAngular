import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-daisy',
  templateUrl: './daisy.page.html',
  styleUrls: ['./daisy.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DaisyPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
