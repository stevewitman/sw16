import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Project, ProjectsService } from '@bb/core-data';

@Component({
  selector: 'bb-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects$: Project[] = [
    {id: '1', title: 'Proj One', details: 'Some details', importanceLevel: 5},
    {id: '2', title: 'Proj Two', details: 'Some details', importanceLevel: 7}
  ];
  project: Project;
  formGroup: FormGroup;

  constructor(
    private projectsService: ProjectsService,
    private formBuilder: FormBuilder,
    // private projectsFacade: ProjectsFacade
  ) { }

  ngOnInit(): void {
    this.initForm();
    // this.projectsFacade.loadProjects();
    // this.projectsFacade.mutations$.subscribe(() => this.reset());
  }

  reset() {
    this.formGroup.reset();
    this.project = {} as Project;
    Object.keys(this.formGroup.controls).forEach(key => {
      this.formGroup.get(key).setErrors(null);
    })
  }

  select(project: Project) {
    console.log('SELECT')
    // this.projectsFacade.selectProject(project.id);
    this.formGroup.patchValue(project);
  }

  create() {
    console.log('CREATE')

    // this.projectsFacade.createProject(this.formGroup.value);
  }

  update() {
    console.log('UPDATE')

    // this.projectsFacade.updateProject(this.formGroup.value);
  }

  save(project: Project) {
    if (project.id) {
      this.update();
    } else {
      this.create();
    }
  }

  delete(project: Project) {
    console.log('DELETE')

    // this.projectsFacade.deleteProject(project);
  }

  initForm() {
    this.formGroup = this.formBuilder.group({
      id: [null],
      title: ['', Validators.compose([
        Validators.required
      ])],
      details: ['', Validators.compose([
        Validators.required
      ])],
      importanceLevel: [0]
    })
  }

}
