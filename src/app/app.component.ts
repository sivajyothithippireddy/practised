import { Component, OnInit } from '@angular/core';
import { FetchService } from './fetch.service';
import { cloneDeep } from 'lodash';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  modalDetails: any;
  ngOnInit() {
    this.tableData();
  }
  tableInforamtion: any;


  constructor(private service: FetchService) {

    setInterval(() => {
      this.tableInforamtion = cloneDeep(this.tableInforamtion);
      console.log(this.tableInforamtion, "tableHitsData");
    }, 5000);
  }



  columnDefs = [
    { headerName: 'TITLE', field: 'title' ,width:200},
    { headerName: 'URL', field: 'url' ,width:340},
    { headerName: 'CREATED AT', field: 'created_at' },
    { headerName: 'AUTHOR', field: 'author' }

  ];

  rowData: any;

  tableData() {
    this.service.gettableData().subscribe(
      resp => {
        console.log(resp);
        this.tableInforamtion = resp;
        this.rowData = this.tableInforamtion.hits;

      }
    )
  }

  modalData(event) {
    this.modalDetails = event.data;
  }

}
