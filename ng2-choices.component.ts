import { ChoiceModel } from './@models/choice.model';
import {
  Component,
  OnInit,
  ElementRef,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'ng2-choices',
  template: `
  <div class="choice-main">
    <span (click)="toggle(choice)" *ngFor="let choice of choices;let i = index"
    class="choice" [ngClass]="{'show':choice.show,'not-show':!choice.show}" >
      <img *ngIf="choice.show" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI2IDI2IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNiAyNiIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCI+CiAgPHBhdGggZD0ibS4zLDE0Yy0wLjItMC4yLTAuMy0wLjUtMC4zLTAuN3MwLjEtMC41IDAuMy0wLjdsMS40LTEuNGMwLjQtMC40IDEtMC40IDEuNCwwbC4xLC4xIDUuNSw1LjljMC4yLDAuMiAwLjUsMC4yIDAuNywwbDEzLjQtMTMuOWgwLjF2LTguODgxNzhlLTE2YzAuNC0wLjQgMS0wLjQgMS40LDBsMS40LDEuNGMwLjQsMC40IDAuNCwxIDAsMS40bDAsMC0xNiwxNi42Yy0wLjIsMC4yLTAuNCwwLjMtMC43LDAuMy0wLjMsMC0wLjUtMC4xLTAuNy0wLjNsLTcuOC04LjQtLjItLjN6IiBmaWxsPSIjRkZGRkZGIi8+Cjwvc3ZnPgo=" />
      {{choice.title}}
    </span>
  </div>
  `,
  styles: [
    `
    .choice.show {
      background: green;
      color: #FAFAFA;
    }

    .choice.not-show {
      color: #212121;
      background: rgba(0, 0, 0, 0.1)
    }

    .choice{
      cursor: pointer;
      font-family: 'Helvetica';
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 3px rgba(0, 0, 0, 0.23);
      margin: 2px;
      padding: 5px;
      border-radius: 5px;
    }

    .choice img{
      height: 15px;
      position: relative;
      top: 2px;
    }
  `
  ]
})
export class Ng2ChoicesComponent implements OnInit {
  @Input() choices: ChoiceModel[] = [];
  @Output() change = new EventEmitter<ChoiceModel>();
  constructor() {}
  ngOnInit() {}
  toggle(choice: ChoiceModel) {
    choice.show = !choice.show;
    this.change.emit(choice);
  }
}
