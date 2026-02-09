import { Component, input, output } from '@angular/core';

@Component({
  selector: 'lib-ui-button',
  imports: [],
  templateUrl: './ui-button.html',
  styleUrl: './ui-button.scss',
})
export class UiButton {
  disabled = input<boolean>(false);
  clicked = output<void>();
}
