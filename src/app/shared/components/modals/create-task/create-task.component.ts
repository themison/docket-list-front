import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ProjectsNetworkService } from 'src/app/shared/network-services/projects.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss'],
})
export class CreateTaskComponent implements OnInit {
  public createTaskForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private projectNetworkService: ProjectsNetworkService,
    private modalCtrl: ModalController,
  ) {}

  ngOnInit() {
    this.initForm();
  }

  public createTask(): void {
    const title = this.createTaskForm.value.title;
    this.modalCtrl.dismiss({ title });
  }

  public cancel(): void {
    this.modalCtrl.dismiss();
  }

  private initForm(): void {
    this.createTaskForm = this.fb.group({
      title: ['', Validators.required],
    });
  }
}
