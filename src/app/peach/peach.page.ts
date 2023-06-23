import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-peach',
  templateUrl: './peach.page.html',
  styleUrls: ['./peach.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PeachPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
