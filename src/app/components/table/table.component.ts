import { Component } from '@angular/core';
import { DataTableService } from 'src/app/services/data-table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  allUsers: any = [];
  constructor(private service : DataTableService){

  }

  ngOnInit() {
    this.users();
  }

  users(): void {
    this.service.users()
        .subscribe((response: any) => {          
          this.allUsers = response;
        });
  }

}
