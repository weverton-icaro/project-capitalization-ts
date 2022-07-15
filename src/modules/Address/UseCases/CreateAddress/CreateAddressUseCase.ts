import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppErrors";
import { userCpfNotNull } from "@shared/errors/Messages";
import { Address } from "@shared/infra/typeorm/entities/Address";

import { ICreateAddressDTO } from "../../dtos/ICreateAddress";
import { AddressRepository } from "../../repositories/implementations/AddressRepository";

@injectable()
export class CreateAddressUseCase {
  constructor(
    @inject("AddressRepository")
    private addressRepository = new AddressRepository()
  ) {}

  async execute({
    cep,
    number,
    complement,
    uf,
    city,
  }: ICreateAddressDTO): Promise<Address> {
    if (!cep) {
      throw new AppError(userCpfNotNull);
    }

    const address = await this.addressRepository.create({
      cep,
      complement,
      number,
      uf,
      city,
    });

    return address;
  }
}
