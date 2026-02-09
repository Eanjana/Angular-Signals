import { Component, signal ,computed, effect} from '@angular/core';
import { UiButton } from 'ui-button';

@Component({
  selector: 'app-user',
  imports: [UiButton],
  templateUrl: './user.html',
  styleUrl: './user.scss',
})
export class User {
  
  name = signal <string>('Jacob');

  age = signal<number>(20);

  // to not run effect on initialization
  isInitialized = false;

  status = computed( () => {
    return this.age() >= 18 ? 'Adult' : 'Minor';
  });


  // effect run automatically when age changes by clicking buttons
  ageChange = effect( () => {

    const currentAge = this.age();
    const currentStatus = this.status();

    // Skip the first automatic run - on console age change will only show after first button click
    if (!this.isInitialized) {
      this.isInitialized = true;
      return;
    }
    else{
    console.log('Age changed to :' , currentAge, '-', 'Status :' , currentStatus);
    }
  });


  //increase age by 1
  increaseAge(){
    this.age.update( value  => value + 1);
  }

  //decrease age by 1

  decreaseAge(){
    this.age.update( value => Math.max(0,value - 1)); //preventing negative age
  }
}
