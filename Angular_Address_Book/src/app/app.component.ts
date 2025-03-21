import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'App';

  persons = [
    { fullname: 'Varaza Mishra', address: 'Marve Road, Next To Maniratna, Malad (west)', city: 'Mumbai', state: 'Maharashtra', zip: '400064', phone: '02228017752' }
  ];

  isFormOpen = false;   // Controls whether the form or table is shown
  editingIndex: number | null = null;
  newPerson = { fullname: '', address: '', city: '', state: '', zip: '', phone: '' };

  // Opens the form and hides the table, text, and button
  openForm() {
    this.isFormOpen = true;
  }

  // Closes the form and shows the table, text, and button again
  closeForm() {
    this.isFormOpen = false;
    this.resetForm();
  }

  // Adds a new person to the table and hides the form
  addNewPerson() {
    if (this.newPerson.fullname && this.newPerson.phone) {
      this.persons.push({ ...this.newPerson });
      this.closeForm();
    } else {
      alert('Please fill in all required fields.');
    }
  }

  resetForm() {
    this.newPerson = { fullname: '', address: '', city: '', state: '', zip: '', phone: '' };
  }

  editPerson(index: number) {
    this.editingIndex = index;
  }

  saveEdit() {
    this.editingIndex = null;
  }

  deletePerson(index: number) {
    this.persons.splice(index, 1);
  }
}
