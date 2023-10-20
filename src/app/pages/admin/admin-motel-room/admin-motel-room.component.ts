import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ModalAdminCreateRoomComponent } from '../modal/modal-admin-create-room/modal-admin-create-room.component';

class RoomDto {
  id!: number;
  name!: string;
  type!: string;
  price!: number;
  description!: string;
}

@Component({
  selector: 'app-admin-motel-room',
  templateUrl: './admin-motel-room.component.html',
  styleUrls: ['./admin-motel-room.component.scss']
})
export class AdminMotelRoomComponent {

  constructor(
    private modalService: NzModalService,
    private notification: NzNotificationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  listOfDisplayData: RoomDto[] = [
    {
      id: 1,
      name: "string",
      type: "string",
      price: 1500000,
      description: "string"
    },
    {
      id: 1,
      name: "string",
      type: "string",
      price: 1500000,
      description: "string"
    },
    {
      id: 1,
      name: "string",
      type: "string",
      price: 1500000,
      description: "string"
    },
    {
      id: 1,
      name: "string",
      type: "string",
      price: 1500000,
      description: "string"
    }
  ];
  loading = false;

  showModalCreateRoom(): void {
    const modal = this.modalService.create({
      nzTitle: 'Thêm mới phòng trọ',
      nzContent: ModalAdminCreateRoomComponent,
      nzWidth: 750,
    });
  }

  onViewDetail(roomId: number): void {
    this.modalService.confirm({
      nzTitle: '<i>Xác nhận</i>',
      nzContent: '<b>Bạn muốn xem thông tin chi tiết của phòng #' + roomId + '</b>',
      nzOnOk: () => this.router.navigate(['/admin/room', roomId])
    });
  }
}
