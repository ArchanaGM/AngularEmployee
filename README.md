# CrudApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

---

# To create new app

ng new crud-app

# To run

ng serve -o

# Install angular material

reference : https://material.angular.io/guide/getting-started

ng add @angular/material

--> refer the documentation and add the components in app.component.html and app.component.scss
--> import module in app.module.ts like MatToolbarModule,
MatIconModule,
MatButtonModule

# To create component

ng g c emp-add-edit
--> import MatDialogModule
--> in app.component.ts create a constructor and create function to open dialog box
--> add (click) in app.module.ts

Go to emp-add-edit
--> emp-add-edit.component.html
--> emp-add-edit.component.scss
--> app.module.ts
like MatFormFieldModule,
MatInputModule,
MatDatepickerModule,
MatNativeDateModule,
MatRadioModule,
MatSelectModule

--> emp-add-edit.component.ts - create education array & refer that to .html as \*ngFor
--> app.module.ts - import - ReactiveFormsModule,

# Install json-server

npm i -g json-server

json-server --watch db.json

--> In db.json add employees:[]

# Create json-service

ng g s services/employee

--> app.module.ts - import - HttpClientModule

--> services/ employee.service.ts - addEmployee

--> emp-add-edit.component.ts

- add \_empService.addEmployee(empForm)
- add \_\_dialogRef

--> services/ employee.service.ts - getEmployeeList

--> app.component.ts

- inject \_empService
- create getEmployeeList()
- extend the AppComponent implements OnInit
- create function ngOnInit()

--> app.module.ts --> MatTableModule

--> app.component.html --> develop table

--> app.component.ts

- MatPaginator, MatSort, MatTableDataSource
- ViewChild
- add ! to dataSource!, paginator!, sort!
- getEmployeeList - add all the dataSource in next() method

--> app.module.ts --> MatPaginatorModule, MatSortModule
--> app.component.html --> include components for table
--> services/ employee.service.ts - deleteEmployee
--> app.component.ts - deleteEmployee()
--> app.component.html --> include click for deleteEmployee
--> app.component.ts - openEditForm()
--> app.component.html --> include click for openEditForm
--> emp-add-edit.component.ts

- Inject (MAT_DIALOG_DATA)
- EmpAddEditComponent implements OnInit
- below constructor add ngOnInit()

--> emp-add-edit.component.html - Save button and Update button on condition

--> emp-add-edit.component.ts - onFormSubmit if and else block

--> app.component.ts -> openEditForm update the dialogRef

# Create a folder core

ng g s core/core

--> core.service.ts -> add openSnackBar
--> app.component.ts ->
add \_coreService in constructor
add this.coreService in deleteEmployee

similar steps to all alerts

# Install ng2 charts

npm install --save ng2-charts

# Install chart.js library

npm install --save chart.js
