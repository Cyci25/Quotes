import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  // quote =[
  //   new Quote(1,'Mohamed Ali',"Sometimes it's better to know when to quit the battle just to win the war",'Cynthia Muriithi', new Date(2018,12,25)),
  //   new Quote(2,'Mohamed Ali',"Sometimes it's better to know when to quit the battle just to win the war",'Cynthia Muriithi', new Date(2018,12,25)),
  //   new Quote(3,'Mohamed Ali',"Sometimes it's better to know when to quit the battle just to win the war",'Cynthia Muriithi', new Date(2018,12,25)),
  //   new Quote(4,'Mohamed Ali',"Sometimes it's better to know when to quit the battle just to win the war",'Cynthia Muriithi', new Date(2018,12,25)),
  //   new Quote(5,'Mohamed Ali',"Sometimes it's better to know when to quit the battle just to win the war",'Cynthia Muriithi', new Date(2018,12,25)),
  //   new Quote(6,'Mohamed Ali',"Sometimes it's better to know when to quit the battle just to win the war",'Cynthia Muriithi', new Date(2018,12,25)),
  //   new Quote(7,'Mohamed Ali',"Sometimes it's better to know when to quit the battle just to win the war",'Cynthia Muriithi', new Date(2018,12,25)),
  //   new Quote(8,'Mohamed Ali',"Sometimes it's better to know when to quit the battle just to win the war",'Cynthia Muriithi', new Date(2018,12,25)),
  // ]

  constructor() { }

  ngOnInit() {
  }

}
