import { Address } from "cluster";
import { Column, ObjectType, PrimaryColumn } from "typeorm";

import { Specialties } from "./Specialties";

class Medic {
  @PrimaryColumn()
  id: string;

  crm: string;

  @Column()
  name: string;

  specialties: Array<Specialties>[];

  tel_fixo: string;

  tel_cel: string;

  address: ObjectType<Address>;
}

export { Medic };
