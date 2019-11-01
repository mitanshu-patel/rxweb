import { Input, Directive, forwardRef, ElementRef } from '@angular/core';
import { ValidationErrors, AbstractControl, NG_ASYNC_VALIDATORS, AsyncValidator, AsyncValidatorFn } from '@angular/forms';
@Directive({
    selector: '[ngModel],[formControlName],[formControl]',
    providers: [{
        provide: NG_ASYNC_VALIDATORS,
        useExisting: forwardRef(() => AsyncValidationDirective),
        multi: true
    }]
})
export class AsyncValidationDirective implements AsyncValidator {
    @Input() async: any;

    validate(control: AbstractControl): Promise<ValidationErrors | null> {
        if (this.async)
            return this.async(control);
        return new Promise((resolve, reject) => { resolve(null); })
    }
}
