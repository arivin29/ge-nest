import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'partid', schema: 'erp_amims' })
export class AmimsPartid {
  @Column({ name: 'childname_partid', nullable: true })
  childnamePartid: string;

  @Column({ name: 'description', nullable: true })
  description: string;

  @PrimaryColumn({ name: 'id_partid' })
  idPartid: string;

  @Column({ name: 'is_deleted', nullable: true })
  isDeleted: number;

  @Column({ name: 'issingle', nullable: true })
  issingle: string;

  @Column({ name: 'partid', nullable: true })
  partid: string;
}
