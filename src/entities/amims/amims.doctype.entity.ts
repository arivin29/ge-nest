import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'doctype', schema: 'erp_amims' })
export class AmimsDoctype {
  @Column({ name: 'doctype', nullable: true })
  doctype: string;

  @Column({ name: 'description', nullable: true })
  description: string;

  @PrimaryColumn({ name: 'id_doctype' })
  idDoctype: string;

  @Column({ name: 'childname', nullable: true })
  childname: string;

  @Column({ name: 'lastupdatestamp', nullable: true })
  lastupdatestamp: string;
}
