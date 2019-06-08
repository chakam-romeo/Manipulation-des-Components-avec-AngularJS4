import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  lastUpdate = new Promise((resolve, reject) => {
  	const date = new Date();
  	setTimeout(()=>{
  		resolve(date);
  	},2000);

  });


  blogs = [
  	{
  		title:'Le dernier samourai',
  		content:'Le film sorti en exclusivité sur zyfy',

  	},
  	{
  		title:'Aladin',
  		content:'Le film sorti en exclusivité sur zyfy',

  	},
  	{
  		title:'Le pandor',
  		content:'Le film sorti en exclusivité sur zyfy',

  	},
  	{
  		title:'Tigre et dragon',
  		content:'Le film sorti en exclusivité sur zyfy',

  	},
  	{
  		title:'Alice au pays des merveilles',
  		content:'Le film sorti en exclusivité sur zyfy',
 
  	},

  ];

  onAllumer(){
  	console.log("on allume tout");
  }
  constructor(){
  	setTimeout(
  		()=>{this.isAuth = true},4000
  		);
  }
}
