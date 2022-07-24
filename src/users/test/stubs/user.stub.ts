import { User } from "../../entities/user.entity";

export const userStub = (): User => {
  return {
    id: 1,
    email: "omermutlu29@gmail.com",
    password: "Omer@2015",
    firstName: "Ömer",
    lastName: "MUTLU",
    isActive: true,
    isDisabled: false
  };
};
