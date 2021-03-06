import { ChoiceOptions } from './@interfaces/option.interface';
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
    <span (click)="toggle(choice,i)" *ngFor="let choice of choices;let i = index"
    class="choice" [ngClass]="{'checked':choice.checked,'not-checked':!choice.checked}" >
      <img *ngIf="choice.checked" src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDI2IDI2IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAyNiAyNiIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCI+CiAgPHBhdGggZD0ibS4zLDE0Yy0wLjItMC4yLTAuMy0wLjUtMC4zLTAuN3MwLjEtMC41IDAuMy0wLjdsMS40LTEuNGMwLjQtMC40IDEtMC40IDEuNCwwbC4xLC4xIDUuNSw1LjljMC4yLDAuMiAwLjUsMC4yIDAuNywwbDEzLjQtMTMuOWgwLjF2LTguODgxNzhlLTE2YzAuNC0wLjQgMS0wLjQgMS40LDBsMS40LDEuNGMwLjQsMC40IDAuNCwxIDAsMS40bDAsMC0xNiwxNi42Yy0wLjIsMC4yLTAuNCwwLjMtMC43LDAuMy0wLjMsMC0wLjUtMC4xLTAuNy0wLjNsLTcuOC04LjQtLjItLjN6IiBmaWxsPSIjRkZGRkZGIi8+Cjwvc3ZnPgo=" />
      {{choice.title}}
    </span>
  </div>
  `,
  styles: [
    `
    .choice.checked {
      background: green;
      color: #FAFAFA;
    }

    .choice.not-checked {
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
  // Default options
  @Input()
  options: ChoiceOptions = {
    multiple: true
  };
  @Input() choices: ChoiceModel[] = [];
  @Output() change = new EventEmitter<ChoiceModel>();
  constructor() {}
  ngOnInit() {}
  toggle(choice: ChoiceModel, index: number) {
    // If multiple is false and current choice checked is true
    if (!this.options.multiple && choice.checked) {
      return;
    }
    choice.checked = !choice.checked;

    // Fire change event
    this.change.emit(choice);

    // Check multiple options
    if (!this.options.multiple) {
      this.unChecked(choice, index);
    }
  }

  private unChecked(currentChoice: ChoiceModel, index: number) {
    this.choices.forEach((choice, i) => {
      if (i !== index) {
        choice.checked = false;
      }
    });
  }
}
