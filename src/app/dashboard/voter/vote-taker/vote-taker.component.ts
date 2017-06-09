import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-vote-taker',
  templateUrl: './vote-taker.component.html',
  styleUrls: ['./vote-taker.component.scss']
})
export class VoteTakerComponent implements OnInit {

  @Input()
  name: string;

  @Output()
  vote = new EventEmitter<boolean>();

  voted: boolean;
  constructor() { }

  ngOnInit() {
  }


  $vote(agreed: boolean) {
    this.vote.emit(agreed);
    this.voted = true;
  }

}
