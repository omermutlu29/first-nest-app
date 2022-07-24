import { registerDecorator, ValidationOptions, ValidationArguments } from "class-validator";

export function IsCategoryPattern(property?: string, validationOptions?: ValidationOptions) {
  return function(object: Object, propertyName: string) {
    registerDecorator({
      name: "isCategoryPattern",
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments){
          return true;
        }
      }
    });
  };
}
