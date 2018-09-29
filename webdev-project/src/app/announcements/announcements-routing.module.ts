import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnouncementsComponent } from './announcements.component';

const announcementsRoutes: Routes = [
  { path: '', component: AnnouncementsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(announcementsRoutes)],
  exports: [RouterModule]
})
export class AnnouncementsRoutingModule { }
