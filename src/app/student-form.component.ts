import { Component } from '@angular/core';
import { Student }    from './student';
@Component({
  selector: 'student-form',
  templateUrl: 'student-form.component.html'
})
export class StudentFormComponent {
  states = ['Delhi', 'Maharashtra', 'MP', 'UP', 'AP'];
  model = new Student('Md Nasim', 'male', this.states[0]);
  submitted = false;
  onSubmit() {
  	this.submitted = true;
  }
  active = true;

  get diagnostic() {
  	return JSON.stringify(this.model);
  }
}
