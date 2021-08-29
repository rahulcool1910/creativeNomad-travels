import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rings',
  templateUrl: './rings.component.html',
  styleUrls: ['./rings.component.scss'],
})
export class RingsComponent implements OnInit {
  @Input() pos: any
  constructor() { }

  ngOnInit() {}
  getStyle() {
    return `${this.pos.top && '--top:' + this.pos.top + ';'} ${this.pos.bottom && '--bottom:' + this.pos.bottom + ';'} ${this.pos.right && '--right:' + this.pos.right + ';'} ${this.pos.left && '--left:' + this.pos.left + ';'}`
  }
}
