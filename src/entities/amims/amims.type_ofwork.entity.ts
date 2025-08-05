import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'type_ofwork', schema: 'erp_amims' })
export class AmimsTypeOfwork {
  @Column({ name: 'childname_type_ofwork', nullable: true })
  childnameTypeOfwork: string;

  @Column({ name: 'code', nullable: true })
  code: string;

  @PrimaryColumn({ name: 'id_type_ofwork' })
  idTypeOfwork: string;

  @Column({ name: 'is_deleted', nullable: true })
  isDeleted: number;

  @Column({ name: 'type_ofwork', nullable: true })
  typeOfwork: string;
}
