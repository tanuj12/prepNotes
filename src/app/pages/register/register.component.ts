import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

import { NgbdModalContent } from '../login/login.component'

import { Component, OnInit, OnDestroy, Renderer2,Input } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';


@Component({
    selector: 'app-modal-content',
    template: `
    <div class="modal-dialog form-dark" role="document" style="margin-top:-22%;margin-left:0%;margin-right:0%">

      <form [formGroup] = 'form' (submit) ='onSubmit()'>
    	  <div class="modal-content card card-image" style=" background-image: url('assets/img/bg1.jpg');background-size:cover">
          <div class="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
            <div class="signup-form">
		          <h2>&nbsp;&nbsp;Register&nbsp;&nbsp;</h2>
		          <p class="hint-text">Create your account. It's free and only takes a minute.</p>
              <div class="form-group">
				        <input formControlName ='uName' type="text" class="form-control" name="first_name" placeholder="First Name" required="required">
              </div>
              <div class="form-group">
              <input formControlName ='email' type="text" class="form-control" name="email" placeholder="Email" required="required">
              </div>
		          <div class="form-group">
                <input formControlName ='password' type="password" class="form-control" name="password" placeholder="Password" required="required">
              </div>
		          <div class="form-group">
                <input formControlName ='cpassword' type="password" class="form-control" name="confirm_password" placeholder="Confirm Password" required="required">
              </div>
              <div class="form-group">
                <label class="checkbox-inline" style="font-weight:bold; color:#00CED1;"><input type="checkbox" required="required"> I accept the <a href="#" style="font-weight:bold;">Terms of Use</a> &amp; <a href="#" style="font-weight:bold;">Privacy Policy</a></label>
		          </div>
		          <div class="form-group">
                <button type="submit" class="btn btn-success btn-lg btn-block">Register Now</button>
              </div>

              <div class="text-center" style="font-weight:bold;">Already have an account? <button class="linkbtn" (click)='open2()' style="font-weight:bold; color:#00FFFF;">Sign in </button></div>
            </div>
          </div>
        </div>
      </form>
    </div>

    `,
    styleUrls: ['./register.component.css']
})
export class NgbdModalContent1 {
  form: FormGroup;
  public isLoading = true;
  private authenticated = false;
  private authListenerSub: Subscription;
  userCreateError = false;

    @Input() name;

    constructor(public activeModal: NgbActiveModal,private modalService: NgbModal,private authService: AuthService,private router:Router) {
      this.form = new FormGroup({
        uName: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
        email: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
        password: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
        cpassword: new FormControl(null, {validators: [Validators.required]}),
      });
    }
    onSubmit() {
      // console.log('error')
      if (this.form.invalid) {
        console.log('error')
        return;
      }
      this.authService.createUser(this.form.value.email, this.form.value.password, this.form.value.uName)
      .subscribe(response => {
        if (response.result) {
          this.modalService.dismissAll(NgbdModalContent1);
          this.authService.logout()
          this.router.navigate(['/dashboard']);
        } else {
          console.log(response.message);
          console.log(response.result);
        }
      } , error => {
        console.log(error)
        this.userCreateError = true;
        this.form.reset();
      });
    }
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
