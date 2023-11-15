import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AdminClientListComponent } from './pages/admin/admin-client-list/admin-client-list.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { AdminMotelRoomComponent } from './pages/admin/admin-motel-room/admin-motel-room.component';
import { AdminRoomDetailComponent } from './pages/admin/admin-room-detail/admin-room-detail.component';
import { CustomerRentalRoomComponent } from './pages/admin/custormer-rental-room/custormer-rental-room.component';
import { AdminRentalContractComponent } from './pages/admin/admin-rental-contract/admin-rental-contract.component';
import { AuthGuard } from './services/guard/auth.guard';
import { AdminGuard } from './services/guard/admin.guard';
import { VerifyOtpComponent } from './components/verify-otp/verify-otp.component';
import { SecurityInfoComponent } from './components/security-info/security-info.component';

const adminRoutes: Routes = [
  { path: 'admin', component: AdminDashboardComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'admin/home', component: AdminDashboardComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'admin/rooms', component: AdminMotelRoomComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'admin/room/:id', component: AdminRoomDetailComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'admin/rental-room/:id', component: CustomerRentalRoomComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'admin/clients', component: AdminClientListComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'admin/security-info', component: SecurityInfoComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: 'admin/contract/:id', component: AdminRentalContractComponent, canActivate: [AuthGuard, AdminGuard] }
]

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'verify-otp/:id', component: VerifyOtpComponent },
  ...adminRoutes,
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
