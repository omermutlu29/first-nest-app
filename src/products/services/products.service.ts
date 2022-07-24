import { ConflictException, Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "../entities/product.entity";
import { CreateProductDto } from "../dto/create-product.dto";
import { UpdateProductDto } from "../dto/update-product.dto";

@Injectable()
export class ProductsService {
  constructor(@InjectRepository(Product)
              private readonly productRepository: Repository<Product>) {
  }

  //finished
  async create(createProductDto: CreateProductDto) {
    const product = new Product();
    product.name = createProductDto.name;
    product.attrs = createProductDto.attrs;
    product.dep = createProductDto.dep;
    product.cat = createProductDto.cat;
    product.desc = createProductDto.desc;
    product.img = createProductDto.img;
    product.attrs = createProductDto.attrs;
    product.sAttrs = createProductDto.sAttrs;
    product.vars = createProductDto.vars;
    product.code = createProductDto.code;
    return await this.productRepository.save(product);
  }

  //finished
  async findAll(take: number = 1, page: number = 1) {
    const skip = (page - 1) * take;
    return await this.productRepository.find({
      take: take,
      skip: skip
    });
  }

  //finished
  async findOne(id: string) {
    return await this.productRepository.findOneById(id);
  }

  //will finish todo
  update(id: string, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  async remove(id: string) {
    const result = await this.productRepository.delete(id);
    return !!result.raw.ok;
  }
}
