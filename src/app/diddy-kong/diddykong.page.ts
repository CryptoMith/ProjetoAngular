import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-diddykong',
  templateUrl: './diddykong.page.html',
  styleUrls: ['./diddykong.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DiddykongPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
