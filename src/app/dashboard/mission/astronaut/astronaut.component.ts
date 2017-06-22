import { Subscription } from 'rxjs/Subscription';
import { Component, Input, OnInit, OnDestroy, Optional } from '@angular/core';
import { MissionService } from '../mission.service';
import { MissionComponent } from '../mission.component';
import { Parent } from '../../dashboard.component';


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

  constructor(
    private missionService: MissionService,
    @Optional()
    private missionComponent: MissionComponent,
    @Optional()
    private p: Parent
  ) {
    this.substription = missionService.missionAnnouced$.subscribe(mission => {
      this.mission = mission;
      this.confirmed = false;
      this.announced = true;


    });
  }

  ngOnInit() {
    console.log(this.missionComponent);
    console.log(this.p);
  }

  ngOnDestroy() {
    this.substription.unsubscribe();
  }

  confirm() {
    this.confirmed = true;
    this.missionService.confirmMission(this.astronaut);
  }

  announce() {
    this.missionComponent.announce();
  }

}
