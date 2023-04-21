import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from '../core/core.service';
import { EmployeeService } from '../services/employee.service';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'organisationName',
    'website',
    'telephone',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _empService: EmployeeService,
    private _coreService: CoreService
  ) {}

  ngOnInit(): void {
    this.getOrganisationList();
  }
  /* Table to view the list with sort and pagination */
  getOrganisationList() {
    this._empService.getOrganisationList().subscribe({
      next: (res: any) => {
        console.log(res);
        // Add datasource to view the table
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (err: any) => {
        console.error(err);
      },
    });
  }
  /* Delete Organisation from table using ID */
  deleteOrganisation(id: number) {
    this._empService.deleteOrganisation(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Organisation deleted!', 'done'); // alert
        this.getOrganisationList();
      },
      error: console.log,
    });
  }

  /* Filtertion on table */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
