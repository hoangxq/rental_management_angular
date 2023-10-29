import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-modal-admin-create-client',
  templateUrl: './modal-admin-create-client.component.html',
  styleUrls: ['./modal-admin-create-client.component.scss']
})
export class ModalAdminCreateClientComponent {

  validateForm!: UntypedFormGroup;

  constructor(
    private modal: NzModalRef,
    private fb: UntypedFormBuilder,
    private notification: NzNotificationService
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      fullName: [null, [Validators.required]],
      idCard: [null, [Validators.required]],
      address: [null, [Validators.required]],
      tel: [null, [Validators.required]],
      email: [null, [Validators.required]],
      note: [null, [Validators.required]]
    });
  }

  destroyModal(): void {
    this.modal.close();
  }

}
