import { Test, TestingModule } from "@nestjs/testing";
import { UsersService } from "../services/users.service";
import { getRepositoryToken } from "@nestjs/typeorm";
import { User } from "../entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "../dto/create-user.dto";
import * as argon from "argon2";

const mockUserRepository = {
  create: jest.fn().mockImplementation((dto) => dto),
  save: jest.fn().mockImplementation((user) => Promise.resolve({ id: Date.now(), ...user })),
  find: jest.fn()
};


describe("UsersService", () => {
  let service: UsersService;
  let userRepository: Repository<User>;

  const USER_REPOSITORY_TOKEN = getRepositoryToken(User);
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService, {
        provide: USER_REPOSITORY_TOKEN,
        useValue: mockUserRepository
      }]
    }).compile();
    service = module.get<UsersService>(UsersService);
    userRepository = module.get<Repository<User>>(USER_REPOSITORY_TOKEN);

  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });


  describe("user create", () => {

    it("should not return users id and password", async () => {
      const password = "Omer@2015";
      let createUserDTO: CreateUserDto = {
        email: "omermutlu29@gmail.com",
        password: password
      };
      let user = await service.create(createUserDTO);
      user = service.hideIdAndPassword(user);
      expect(user).toEqual({
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName
      });
    });

    it("should saved password with correct hash",
      async () => {
        const password = "Omer@2015";
        let createUserDTO: CreateUserDto = {
          email: "omermutlu29@gmail.com",
          password: password
        };
        const user = await service.create(createUserDTO);
        const isCorrectlySaved = await argon.verify(user.password, password);
        expect(isCorrectlySaved).toEqual(true);
      });
  });

});
