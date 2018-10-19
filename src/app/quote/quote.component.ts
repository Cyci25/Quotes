import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { DeclareFunctionStmt } from '@angular/compiler';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote =[
    new Quote(1,'Mohamed Ali',"Sometimes it's better to know when to quit the battle just to win the war",'Cynthia Muriithi','15th December 2018'),
    new Quote(1,'Mohamed Ali',"Sometimes it's better to know when to quit the battle just to win the war",'Cynthia Muriithi','15th December 2018'),
    new Quote(1,'Mohamed Ali',"Sometimes it's better to know when to quit the battle just to win the war",'Cynthia Muriithi','15th December 2018'),
    new Quote(1,'Mohamed Ali',"Sometimes it's better to know when to quit the battle just to win the war",'Cynthia Muriithi','15th December 2018'),
    new Quote(1,'Mohamed Ali',"Sometimes it's better to know when to quit the battle just to win the war",'Cynthia Muriithi','15th December 2018'),
    new Quote(1,'Mohamed Ali',"Sometimes it's better to know when to quit the battle just to win the war",'Cynthia Muriithi','15th December 2018'),
    new Quote(1,'Mohamed Ali',"Sometimes it's better to know when to quit the battle just to win the war",'Cynthia Muriithi','15th December 2018'),
    new Quote(1,'Mohamed Ali',"Sometimes it's better to know when to quit the battle just to win the war",'Cynthia Muriithi','15th December 2018'),


  ]

  constructor() { }

  ngOnInit() {
  }

}
