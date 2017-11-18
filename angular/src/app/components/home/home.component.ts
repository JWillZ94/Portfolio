import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, keyframes, query, stagger, animateChild } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* <=> *',
        query('li', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
      )
    ])
  ]
})
export class HomeComponent implements OnInit {
  skills: string[];
  languages: string[];
  projects: string[];
  contributions: string[];

  constructor() { }

  ngOnInit() {
    this.skills = ['MEAN Stack (MongoDB, Express.js, Angular, Node.js)', 'Mobile First, Responsive Web Design', 'Bootstrap', 'jQuery'];
    this.languages = ['Primary: Javascript', 'Secondary: Python'];
    this.projects = ['(First Project)', '(Second Project)', '(Third Project)'];
    this.contributions = ['(First Contribution)', '(Second Contribution)', '(Third Contribution)'];
  }

}
