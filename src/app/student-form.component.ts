import { Component } from '@angular/core';
import { Student }    from './student';
@Component({
  selector: 'student-form',
  templateUrl: 'student-form.component.html'
})
export class StudentFormComponent {
  checked = false;
  states = ['Delhi', 'Maharashtra', 'MP', 'UP', 'AP'];

  hobbies = [
    { name: 'Sports', selected: false},
    { name: 'Music', selected: false},
    { name: 'Acting', selected: false}
  ];

  model = new Student('Md Nasim', 'male', '2017-05-15', this.states[0], this.hobbies);

  submitted = false;
  onSubmit() {
  	this.submitted = true;
  }
  active = true;

  get diagnostic() {
  	return JSON.stringify(this.model);
  }

  updateCheckedHobbies(hobbies) {
     console.log(hobbies);
     let checked = false;
    for (let hobby of hobbies) {
      if (hobby.selected) {
        this.checked = true;
        break;
      } else {
        this.checked = false;
      }
    }

  }
}
