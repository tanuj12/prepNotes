
import {Component, Input} from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';





@Component({
    selector: 'app-modal-content',
    template: `
      <p>Need a Login form here</p>
    `,
    styleUrls: ['./login.component.scss']
})
export class NgbdModalContent {
    @Input() name;

    constructor(public activeModal: NgbActiveModal) {}
}





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private modalService: NgbModal) {}
  open() {
      const modalRef = this.modalService.open(NgbdModalContent);
      modalRef.componentInstance.name = 'World';
  }
}
