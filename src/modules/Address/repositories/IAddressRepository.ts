import { Address } from "@shared/infra/typeorm/entities/Address";

import { ICreateAddressDTO } from "../dtos/ICreateAddress";

export interface IAddressRepository {
  create(data: ICreateAddressDTO): Promise<Address>;
  findById(id: number): Promise<Address>;
  findByCep(cep: string): Promise<Address>;
}
