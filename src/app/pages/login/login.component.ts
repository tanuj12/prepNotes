
import {Component, Input} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { NgbdModalContent1 } from '../register/register.component'



@Component({
    selector: 'app-modal-content',
    template: `

<div class="modal-dialog form-dark" role="document" style="margin-top:-22%;margin-left:0%;margin-right:0%">

<form >
  <div class="modal-content card card-image" style="  background-color: gray;">
    <div class="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
      <div class="signup-form">
        <h2>&nbsp;&nbsp;Login&nbsp;&nbsp;</h2>
        <div class="form-group">
        <input type="text" class="form-control" name="email" placeholder="Email" required="required">
        </div>
        <div class="form-group">
          <input type="password" class="form-control" name="password" placeholder="Password" required="required">
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-success btn-lg btn-block">Login</button>
        </div>

        <div class="text-center">Create a new Account? <button class="linkbtn" (click)='open2()'>Sign up </button></div>
      </div>
    </div>
  </div>
</form>
</div>
    `,
    styleUrls: ['./login.component.css']
})
export class NgbdModalContent {
    @Input() name;

    constructor(public activeModal: NgbActiveModal,private modalService: NgbModal) {}
    open2() {
      this.modalService.dismissAll(NgbdModalContent);

      this.modalService.open(NgbdModalContent1);
    }
}





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private modalService: NgbModal) {}
  open() {
    this.modalService.dismissAll(NgbdModalContent1);
    this.modalService.open(NgbdModalContent);
      // modalRef.componentInstance.name = 'XYZ';
  }

}
