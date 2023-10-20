import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { AdminGuard } from './services/guard/admin.guard';
import { AuthGuard } from './services/guard/auth.guard';
import { AdminMotelRoomComponent } from './pages/admin/admin-motel-room/admin-motel-room.component';
import { AdminRoomDetailComponent } from './pages/admin/admin-room-detail/admin-room-detail.component';

const adminRoutes: Routes = [
  { path: 'admin/home', component: AdminDashboardComponent, canActivate: [] },
  { path: 'admin/rooms', component: AdminMotelRoomComponent, canActivate: [] },
  { path: 'admin/room/:id', component: AdminRoomDetailComponent, canActivate: [] }
]

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  ...adminRoutes,
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
