import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../shared/network-services/auth.service';

@Component({
  selector: 'app-docket-list',
  templateUrl: './docket-list.page.html',
  styleUrls: ['./docket-list.page.scss'],
})
export class DocketListPage implements OnInit {
  constructor(private menu: MenuController, private test: AuthService) {}

  ngOnInit() {
    this.menu.enable(true, 'doc-list');
    this.menu.open('doc-list');
  }
}
