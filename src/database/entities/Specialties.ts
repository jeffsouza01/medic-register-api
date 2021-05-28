import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("specialties")
class Specialties {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;
}

export { Specialties };
