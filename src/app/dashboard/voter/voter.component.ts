import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.scss']
})
export class VoterComponent implements OnInit {
  agreed: number = 0;
  disagreed: number = 0;

  voters: string[] = ['Zhao', 'Qian', 'Sun', 'Wang'];
  constructor() { }

  ngOnInit() {
  }

  onVote(agreed: boolean) {
    agreed ? this.agreed++ : this.disagreed++;
  }

}
