import { Component, OnInit } from '@angular/core';
import { Salesperson } from '../sper.class';
import { SperService } from '../sper.service';

@Component({
  selector: 'app-sper-list',
  templateUrl: './sper-list.component.html',
  styleUrls: ['./sper-list.component.css']
})
export class SperListComponent implements OnInit {

  spers: Salesperson[] = [];

  searchCriteria: string = "";

// sort column from pipe
sortColumn: string = "id";
sortAsc: boolean = true;
sortFn(column: string): void {
  if(column === this.sortColumn) {
    this.sortAsc = !this.sortAsc;
    return;
  }
    this.sortColumn = column;
    this.sortAsc = true;

}

  constructor(
    private spersvc: SperService
  ) { }

  ngOnInit(): void {
    this.spersvc.list().subscribe(
      res => {
        console.debug("Salespersons:", res);
        this.spers = res;
      },
      err => { console.error(err); }
    );
  }

}