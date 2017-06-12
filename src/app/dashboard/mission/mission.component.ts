import { Component, OnInit } from '@angular/core';
import { MissionService } from './mission.service';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent implements OnInit {

  astronauts = ['Neo', 'Woo', 'Tom'];

  missions = ['Fly to the moon!', 'Fly to mars!', 'Fly to sun!'];
  nextMission = 0;

  history: string[] = [];

  constructor(private missionService: MissionService) {
    missionService.missionConfirmed$.subscribe(astronaut => {
      this.history.push(`${astronaut} confirmed the mission`);
    });
  }

  ngOnInit() {
  }

  announce() {
    let mission = this.missions[this.nextMission++];
    this.missionService.announceMission(mission);
    this.history.push(`Mission "${mission}" announced`);
    if (this.nextMission >= this.missions.length) { this.nextMission = 0; }
  }

}
