import {Component, Input} from "@angular/core";
import {SlotColumn} from "../slot-store/slot-store.service";
import {SlotColumnComponent} from "./slot-column/slot-column.component";

@Component({
  selector: 'slot-grid',
  template: `    
    <h2>Programme</h2>
    <slot-column *ngFor="let slotColumn of columns" [data]="slotColumn"></slot-column>
  `,
  providers: [],
  directives: [SlotColumnComponent]
})
export class SlotGridComponent {

  @Input()
  columns:Array<SlotColumn>;

  constructor() { }

}
