import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { ProjectsNetworkService } from 'src/app/shared/network-services/projects.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss'],
})
export class CreateProjectComponent implements OnInit {
  public createProjectForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private projectNetworkService: ProjectsNetworkService,
    private modalCtrl: ModalController,
  ) {}

  ngOnInit() {
    this.initForm();
  }

  public createProject(): void {
    const title = this.createProjectForm.value.title;
    console.log(title);
    this.projectNetworkService.createProject(title).subscribe(() => this.modalCtrl.dismiss());
  }

  public test(): void {
    console.log(this.createProjectForm.get('title'));
  }

  public cancel(): void {
    this.modalCtrl.dismiss();
  }

  private initForm(): void {
    this.createProjectForm = this.fb.group({
      title: ['', Validators.required],
    });
  }
}
