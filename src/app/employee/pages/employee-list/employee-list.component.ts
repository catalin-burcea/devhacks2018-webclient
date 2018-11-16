import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/shared/entities/Employee';
import { EmployeeService } from '../../services/employee.service';
// import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
// import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  public employeeList: Employee[];
  public employeeListByRole: Employee[];
  // public date = new NgbDate(1789, 7, 14);
  closeResult: string;

  constructor(private employeeService: EmployeeService, /*private modalService: NgbModal*/) {

  }

  // open(content) {
  //   this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
  //     this.closeResult = `Closed with: ${result}`;
  //   }, (reason) => {
  //     this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //   });
  // }

  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return 'by pressing ESC';
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return 'by clicking on a backdrop';
  //   } else {
  //     return  `with: ${reason}`;
  //   }
  // }
  ngOnInit() {
    this.getEmployees();
    this.getEmployeesByRole();
  }

  private getEmployees() {
    this.employeeService.getEmployeeList()
      .subscribe(
        data => {
          console.log('employee-list', data);
          this.employeeList = data;
        },
        error => {
          console.log("Error", error);
        }
      );
  }

  private getEmployeesByRole() {
    console.log('EmployeeListComponent.getEmployeesByRole');
    this.employeeService.getEmployeesByRole("thief")
      .subscribe(
        data => {
          console.log('employee-list-by-role', data);
          this.employeeListByRole = data;
        },
        error => {
          console.log("Error", error);
        }
      );
  }


}
