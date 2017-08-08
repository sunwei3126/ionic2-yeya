import { FormControl } from '@angular/forms';

export class NumberValidator {
  
    static isValid(control: FormControl): any {
         if(isNaN(control.value)){
            return {
                "not a number": true
            };
        }
 
        if(control.value % 1 !== 0){
            return {
                "not a whole number": true
            };
        }
 
        if(control.value < 1){
            return {
                "too small": true
            };
        }
 
        if (control.value > 5000){
            return {
                "not realistic": true
            };
        }
 
        return null;
    }
}