import { Component } from '@angular/core';

import { attacker, defender } from './operator'
import { Operator } from './operator.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  att: Array<Operator> = attacker;
  def: Array<Operator> = defender;

  operator: Operator = attacker[0];

  onRandomSelect(category) {
    if (category === 'attacker') {
      for (let i = 0; i < 20; i++) {
        const randomOperator = Math.floor(Math.random() * this.att.length);
        setTimeout(() => {
          this.operator = this.att[randomOperator];
        }, 100 * i);
      }
    }

    if (category === 'defender') {
      for (let i = 0; i < 20; i++) {
        const randomOperator = Math.floor(Math.random() * this.def.length);
        setTimeout(() => {
          this.operator = this.def[randomOperator];
        }, 100 * i);
      }
    }
  }
}
