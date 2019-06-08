import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

	@Input() titre: string;
	@Input() contenu: string;
	@Input() date_creation: string;
	
	valeurCeck : int = 0;

  constructor() {

  	this.date_creation = new Date();

   }

  ngOnInit() {
  }
  onIncrement(){
  	
  	return this.valeurCeck++;
  }
  onDecrement(){
  	return this.valeurCeck--;
  }



}
