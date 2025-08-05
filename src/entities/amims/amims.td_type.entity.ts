import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'td_type', schema: 'erp_amims' })
export class AmimsTdType {
  @Column({ name: 'description_td_type', nullable: true })
  descriptionTdType: string;

  @PrimaryColumn({ name: 'id_td_type' })
  idTdType: string;

  @Column({ name: 'td_type', nullable: true })
  tdType: string;
}
