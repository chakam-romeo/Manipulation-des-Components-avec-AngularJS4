import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

	@Input() appareilName: string;
	@Input() appareilStatut: string;

  constructor() { }

  ngOnInit() {
  }

  getStatut(){
  	return this.appareilStatut;
  }
  
  getColor() {
    if(this.appareilStatut === 'allumé') {
      return 'green';
    } else if(this.appareilStatut === 'éteint') {
      return 'red';
    }
}

}
