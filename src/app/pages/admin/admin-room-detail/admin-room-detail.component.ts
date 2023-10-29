import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-admin-room-detail',
  templateUrl: './admin-room-detail.component.html',
  styleUrls: ['./admin-room-detail.component.scss']
})
export class AdminRoomDetailComponent {
  price = 1500000;
  roomId: number = 1;

  constructor(
    private modalService: NzModalService,
    private notification: NzNotificationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onRental(): void {
    this.router.navigate(['/admin/rental-room', this.roomId]);
  }
}
