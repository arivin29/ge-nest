import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'type_ofwork', schema: 'erp_amims' })
export class AmimsTypeOfwork {
  @PrimaryColumn({ name: 'id_type_ofwork' })
  idTypeOfwork: string;

  @Column({ name: 'type_ofwork', nullable: true })
  typeOfwork: string;

  @Column({ name: 'childname_type_ofwork', nullable: true })
  childnameTypeOfwork: string;

  @Column({ name: 'is_deleted', nullable: true })
  isDeleted: number;

  @Column({ name: 'code', nullable: true })
  code: string;
}
