import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-modal-admin-create-room',
  templateUrl: './modal-admin-create-room.component.html',
  styleUrls: ['./modal-admin-create-room.component.scss']
})
export class ModalAdminCreateRoomComponent {

  validateForm!: UntypedFormGroup;

  constructor(
    private modal: NzModalRef,
    private fb: UntypedFormBuilder,
    private notification: NzNotificationService
  ) { }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      useManual: [null, [Validators.required]],
      unit: [null, [Validators.required]],
      // quantity: [null, [Validators.required]],
      price: [null, [Validators.required]],
      activeElement: [null, [Validators.required]],
      content: [null, [Validators.required]],
      using: [null, [Validators.required]],
      packing: [null, [Validators.required]],
      productionUnit: [null, [Validators.required]],
      declaringUnit: [null, [Validators.required]],
    });
  }

  destroyModal(): void {
    this.modal.close();
  }

}
