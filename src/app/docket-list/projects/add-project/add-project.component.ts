import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateProjectComponent } from 'src/app/shared/components/modals/create-project/create-project.component';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
})
export class AddProjectComponent implements OnInit {
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  public async addProject(): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: CreateProjectComponent,
      cssClass: 'create-project-modal',
    });

    await modal.present();
  }
}
