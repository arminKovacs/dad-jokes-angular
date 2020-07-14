import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css'],
})
export class JokeComponent implements OnInit {
  joke: Object;

  constructor(private requestedJoke: RequestService) {}

  ngOnInit(): void {
    this.requestedJoke.getJoke().subscribe((data: any) => {
      this.joke = data.joke;
    });
  }
}
