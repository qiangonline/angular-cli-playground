import { Subscription } from 'rxjs/Subscription';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { MissionService } from '../mission.service';

@Component({
  selector: 'app-astronaut',
  templateUrl: './astronaut.component.html',
  styleUrls: ['./astronaut.component.scss']
})
export class AstronautComponent implements OnInit, OnDestroy {
  @Input()
  astronaut: string;

  mission = '<no mission announced>';
  confirmed = false;
  announced = false;
  substription: Subscription;

  constructor(private missionService: MissionService) {
    this.substription = missionService.missionAnnouced$.subscribe(mission => {
      this.mission = mission;
      this.confirmed = false;
      this.announced = true;
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.substription.unsubscribe();
  }

  confirm() {
    this.confirmed = true;
    this.missionService.confirmMission(this.astronaut);
  }

}
