import { Test } from "@nestjs/testing";
import { User } from "../entities/user.entity";
import { UsersController } from "../users.controller";
import { userStub } from "./stubs/user.stub";
import { UsersService } from "../services/users.service";
import { CreateUserDto } from "../dto/create-user.dto";

jest.mock("./../services/users.service");

describe("UsersController", () => {
  let usersController: UsersController;
  let usersService: UsersService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [],
      controllers: [UsersController],
      providers: [UsersService]
    }).compile();

    usersController = moduleRef.get<UsersController>(UsersController);
    usersService = moduleRef.get<UsersService>(UsersService);
    jest.clearAllMocks();
  });

  describe("findAll", () => {
    describe("when getUsers is called", () => {
      let users: User[];

      beforeEach(async () => {
        users = await usersController.findAll();

      });

      test("then it should call usersService", () => {
        expect(usersService.findAll).toBeCalled();
      });

      test("users have to be type of user model array", () => {
        expect(users).toEqual([userStub()]);
      });
    });
  });

  describe("createUser", () => {
    describe("when createUser called", () => {
      let user: User;
      let createUserDto: CreateUserDto;

      beforeEach(async () => {
        createUserDto = {
          email: userStub().email,
          password: userStub().password
        };
        user = await usersController.create(createUserDto);
      });
      test("it has to call create method of service ", () => {
        expect(usersService.create).toHaveBeenCalledWith(createUserDto);
      });

      test("it has to call hideIdAndPassword method of service ", () => {
        expect(usersService.hideIdAndPassword).toHaveBeenCalled();
      });

      test("it should not show id ", () => {
        expect(user.id).toBeUndefined();
      });

      test("it should not show password ", () => {
        expect(user.password).toBeUndefined();
      });

    });
  });

});
