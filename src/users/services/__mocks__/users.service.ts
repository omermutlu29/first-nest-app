import { userStub } from "../../test/stubs/user.stub";

export const UsersService = jest.fn().mockReturnValue({
  create: jest.fn().mockReturnValue({
    id:userStub().id,
    firstName:userStub().firstName,
    lastName:userStub().lastName,
    isDisabled:userStub().isDisabled,
    isActive:userStub().isActive,
    email:userStub().email,
  }),
  findAll: jest.fn().mockResolvedValue([userStub()]),
  hideIdAndPassword: jest.fn().mockReturnValue({
    firstName:userStub().firstName,
    lastName:userStub().lastName,
    email:userStub().email,
  }),
})
