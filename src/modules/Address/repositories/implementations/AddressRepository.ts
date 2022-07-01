import { getRepository, Repository } from "typeorm";

import { ICreateAddressDTO } from "@modules/Address/dtos/ICreateAddress";
import { Address } from "@shared/infra/typeorm/entities/Address";

import { IAddressRepository } from "../IAddressRepository";

export class AddressRepository implements IAddressRepository {
  private repository: Repository<Address>;

  constructor() {
    this.repository = getRepository(Address);
  }

  async create({
    cep,
    number,
    complement,
    uf,
    city,
  }: ICreateAddressDTO): Promise<Address> {
    const address = this.repository.create({
      cep,
      number,
      complement,
      uf,
      city,
    });
    await this.repository.save(address);

    return address;
  }

  async findById(id: number): Promise<Address> {
    const address = await this.repository.findOne(id);

    return address;
  }

  async findByCep(cep: string): Promise<Address> {
    const address = await this.repository.findOne(cep);

    return address;
  }
}
