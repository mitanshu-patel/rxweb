import {
    ValidatorFn,
    AbstractControl} from "@angular/forms";
import { MessageConfig } from "../models/config/message-config";
import { ObjectMaker } from "../util/object-maker";
import { AnnotationTypes } from "../core/validator.static";
import { ValidatorValueChecker } from "../util/validator-value-checker";
export function lowercaseValidator(config:MessageConfig): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        if (ValidatorValueChecker.pass(control,config)) {
                if (!(control.value === control.value.toLowerCase()))
                    return ObjectMaker.toJson(AnnotationTypes.lowerCase, config, [control.value])
            }
        return ObjectMaker.null();
    }
}
