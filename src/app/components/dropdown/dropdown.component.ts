import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent {
  @Input() title: string | undefined;
  toggle: boolean = false;

  onToggle(): void {
    this.toggle = !this.toggle;
  }
}
