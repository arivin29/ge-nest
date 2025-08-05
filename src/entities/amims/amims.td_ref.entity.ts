import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'td_ref', schema: 'erp_amims' })
export class AmimsTdRef {
  @Column({ name: 'id_td', nullable: true })
  idTd: string;

  @Column({ name: 'id_td_lain', nullable: true })
  idTdLain: string;

  @PrimaryColumn({ name: 'id_td_ref' })
  idTdRef: string;

  @Column({ name: 'no_td_lain', nullable: true })
  noTdLain: string;
}
