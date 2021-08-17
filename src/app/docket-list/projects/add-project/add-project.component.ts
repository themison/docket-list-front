import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateProjectComponent } from 'src/app/shared/components/modals/create-project/create-project.component';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
})
export class AddProjectComponent implements OnInit {
  @Output()
  public refreshProjects = new EventEmitter<void>();
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  public async addProject(): Promise<void> {
    const modal = await this.modalCtrl.create({
      component: CreateProjectComponent,
      cssClass: 'create-project-modal',
    });

    await modal.present();

    modal.onWillDismiss().then((res) => {
      if (res.role === 'created') {
        this.refreshProjects.emit();
      }
    });
  }
}
