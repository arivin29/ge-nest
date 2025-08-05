import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'log_transfer', schema: 'erp_amims' })
export class AmimsLogTransfer {
  @Column({ name: 'date_transfer', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  dateTransfer: string;

  @Column({ name: 'from_id_part', nullable: true })
  fromIdPart: string;

  @Column({ name: 'from_site', nullable: true })
  fromSite: string;

  @PrimaryColumn({ name: 'id_log_transfer' })
  idLogTransfer: string;

  @Column({ name: 'id_mpart', nullable: true })
  idMpart: string;

  @Column({ name: 'id_user', nullable: true })
  idUser: string;

  @Column({ name: 'issingle', nullable: true })
  issingle: string;

  @Column({ name: 'qty', nullable: true })
  qty: number;

  @Column({ name: 'to_id_part', nullable: true })
  toIdPart: string;

  @Column({ name: 'to_site', nullable: true })
  toSite: number;
}
