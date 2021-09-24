import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {
  showParagraph: boolean = true;
  itemNumber: number = 0;
  itemsArray = [];

  constructor() { }

  ngOnInit(): void {
  }

  onBtnClick() {
    this.showParagraph = !this.showParagraph;
    this.itemNumber = this.itemNumber+1;
    this.itemsArray.push(this.itemNumber);
  }
}
