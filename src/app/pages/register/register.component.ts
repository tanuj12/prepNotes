import {Component, Input} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { NgbdModalContent } from '../login/login.component'



@Component({
    selector: 'app-modal-content',
    template: `
<!-- <form class="signup-form" style="margin-top:-6%">
  <div class="container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <hr>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required>
    <hr>
    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

    <button type="submit" class="registerbtn">Register</button>
  </div>

  <div class="container signin">
    <p>Already have an account? <button class="btn btn-outline-primary btn-info" (click)='open2()'>Sign in</button>.</p>
  </div>
</form> -->

    <div class="modal-dialog form-dark" role="document" style="margin-top:-22%;margin-left:0%;margin-right:0%">

      <form >
    	  <div class="modal-content card card-image" style="  background-color: gray;">
          <div class="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
            <div class="signup-form">
		          <h2>&nbsp;&nbsp;Register&nbsp;&nbsp;</h2>
		          <p class="hint-text">Create your account. It's free and only takes a minute.</p>
              <div class="form-group">
				        <input type="text" class="form-control" name="first_name" placeholder="First Name" required="required">
              </div>
              <div class="form-group">
              <input type="text" class="form-control" name="email" placeholder="Email" required="required">
              </div>
		          <div class="form-group">
                <input type="password" class="form-control" name="password" placeholder="Password" required="required">
              </div>
		          <div class="form-group">
                <input type="password" class="form-control" name="confirm_password" placeholder="Confirm Password" required="required">
              </div>
              <div class="form-group">
                <label class="checkbox-inline"><input type="checkbox" required="required"> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
		          </div>
		          <div class="form-group">
                <button type="submit" class="btn btn-success btn-lg btn-block">Register Now</button>
              </div>

              <div class="text-center">Already have an account? <button class="linkbtn" (click)='open2()'>Sign in </button></div>
            </div>
          </div>
        </div>
      </form>
    </div>

    `,
    styleUrls: ['./register.component.css']
})
export class NgbdModalContent1 {
    @Input() name;

    constructor(public activeModal: NgbActiveModal,private modalService: NgbModal) {}
    open2() {
      this.modalService.dismissAll(NgbdModalContent1);

      this.modalService.open(NgbdModalContent);
    }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private modalService: NgbModal) {}
  open() {
    this.modalService.dismissAll(NgbdModalContent);
    this.modalService.open(NgbdModalContent1);
      // modalRef.componentInstance.name = 'XYZ';
  }


}
