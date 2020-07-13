
import { Component,Input, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent1 } from '../register/register.component'
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { stringify } from 'querystring';


@Component({
    selector: 'app-modal-content',
    template: `

<div class="modal-dialog form-dark" role="document" style="margin-top:-22%;margin-left:0%;margin-right:0%">

<form [formGroup]='form' >
  <div class="modal-content card card-image" style=" background-image: url('assets/img/bg1.jpg');background-size:cover">
    <div class="text-white rgba-stylish-strong py-5 px-5 z-depth-4">
      <div class="signup-form">
        <h2><b>&nbsp;&nbsp;Login&nbsp;&nbsp;</b></h2>
        <div class="form-group">
          <input formControlName="uName" type="text" class="form-control" name="email" placeholder="Email" >
        </div>
        <div class="form-group">
          <input formControlName = 'password' type="password" class="form-control" name="password" placeholder="Password">
        </div>
        <div class="form-group">
          <button type="submit" (click) = 'onSubmit()' class="btn btn-success btn-lg btn-block">Login</button>
        </div>

        <div class="text-center" style="font-weight:bold;">Create a new Account? <button class="linkbtn" (click)='open2()'>Sign up </button></div>
      </div>
    </div>
  </div>
</form>
</div>
    `,
    styleUrls: ['./login.component.css']
})
export class NgbdModalContent {
  private authenticated = false;
  private authListenerSub: Subscription;
  private uName = '';
  private password = '';
  static url= '/dashboard'
  form: FormGroup;
  errorLoggingUser = false;
    @Input() name;

    constructor(public activeModal: NgbActiveModal,private modalService: NgbModal, private authService: AuthService,private router: Router) {}
    ngOnInit() {
      console.log('asdas')
      this.form = new FormGroup({
        uName: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]}),
        password: new FormControl(null, {validators: [Validators.required, Validators.minLength(3)]})
      });
    }
    onSubmit() {
      if (this.form.invalid) {
        return;
      }
      this.authService.loginUser(this.form.value.uName, this.form.value.password)
      .subscribe((response) => {
        if (response.message === 'User Logged in.') {
          this.router.navigate([NgbdModalContent.url]);
          AuthService.userStatus.next(true)
          AuthService.User = true
          // console.log('YESSSSs')
          this.modalService.dismissAll(NgbdModalContent);
          // console.log('going to '+ NgbdModalContent.url)


        } else {
          this.errorLoggingUser = true;
          // console.log('YESSSSs')
          this.form.reset();
        }
      });
    }
    open2() {
      this.modalService.dismissAll(NgbdModalContent);

      this.modalService.open(NgbdModalContent1);
    }
}





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  constructor(private modalService: NgbModal) {}
  open() {
    this.modalService.dismissAll(NgbdModalContent1);
    this.modalService.open(NgbdModalContent);
      // modalRef.componentInstance.name = 'XYZ';
  }

}
