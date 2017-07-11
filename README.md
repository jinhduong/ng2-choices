# ng2-choices

The simplest library for multiple choices in Angular.

- No dependencies
- Modern

![http://i.imgur.com/AerIXxA.png](http://i.imgur.com/AerIXxA.png)

## 1. Install
`npm install ng2-choices --save`

## 2. Using

**.html**
``` html
<ng2-choices (change)="change($event)" [choices]="choices"></ng2-choices>
```

**.component**

``` ts
choices: ChoiceModel[] = [
    { title: 'Angular', show: false },
    { title: 'React', show: false },
    { title: 'Vue', show: false },
    { title: 'Ember', show: false },
    { title: 'Preact', show: false },
    { title: 'Aurelia', show: false }
  ];
```

**.app.module**

``` ts
import { Ng2ChoicesComponent } from './ng2-choices/build';

@NgModule({
  declarations: [
    AppComponent,
    Ng2ChoicesComponent
  ],
  imports: [
    ...
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```








