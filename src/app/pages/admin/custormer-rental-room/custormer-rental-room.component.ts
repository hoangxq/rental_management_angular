import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ModalAdminCreateClientComponent } from '../modal/modal-admin-create-client/modal-admin-create-client.component';

class ClientDto {
  id!: number;
  fullName!: string;
  idCard!: string;
  address!: string;
  tel!: string;
  email!: string;
  note!: string;
}

@Component({
  selector: 'app-custormer-rental-room',
  templateUrl: './custormer-rental-room.component.html',
  styleUrls: ['./custormer-rental-room.component.scss']
})
export class CustomerRentalRoomComponent {

  rowSelectedClient: number = -1;

  constructor(
    private modalService: NzModalService,
    private notification: NzNotificationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  listOfDisplayData: ClientDto[] = [
    {
      id: 1,
      fullName: "Nguyen Van A",
      idCard: "033201002717",
      address: "Mo Lao, Ha Dong, Ha Noi",
      tel: "0838978446",
      email: "anv@gmail.com",
      note: "None",
    },
    {
      id: 2,
      fullName: "Nguyen Van A",
      idCard: "033201002717",
      address: "Mo Lao, Ha Dong, Ha Noi",
      tel: "0838978446",
      email: "anv@gmail.com",
      note: "None",
    },
    {
      id: 3,
      fullName: "Nguyen Van A",
      idCard: "033201002717",
      address: "Mo Lao, Ha Dong, Ha Noi",
      tel: "0838978446",
      email: "anv@gmail.com",
      note: "None",
    },
    {
      id: 4,
      fullName: "Nguyen Van A",
      idCard: "033201002717",
      address: "Mo Lao, Ha Dong, Ha Noi",
      tel: "0838978446",
      email: "anv@gmail.com",
      note: "None",
    },
    {
      id: 5,
      fullName: "Nguyen Van A",
      idCard: "033201002717",
      address: "Mo Lao, Ha Dong, Ha Noi",
      tel: "0838978446",
      email: "anv@gmail.com",
      note: "None",
    },
  ];
  loading = false;

  showModalCreateClient(): void {
    const modal = this.modalService.create({
      nzTitle: 'Thêm mới khách hàng',
      nzContent: ModalAdminCreateClientComponent,
      nzWidth: 750,
    });
  }

  onRental(): void {
    this.router.navigate(['/admin/clients']);
  }

  clickEvent(clientId: number): void {
    this.rowSelectedClient = clientId;
  }
}
