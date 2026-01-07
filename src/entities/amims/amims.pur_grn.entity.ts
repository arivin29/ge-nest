import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'pur_grn', schema: 'erp_amims' })
export class AmimsPurGrn {
  @PrimaryColumn({ name: 'id_pur_grn' })
  idPurGrn: string;

  @Column({ name: 'id_pur_vendor', nullable: true })
  idPurVendor: string;

  @Column({ name: 'number_grn', nullable: true })
  numberGrn: string;

  @Column({ name: 'date_grn', nullable: true })
  dateGrn: string;

  @Column({ name: 'id_user', nullable: true })
  idUser: string;

  @Column({ name: 'id_site', nullable: true })
  idSite: string;

  @Column({ name: 'grn_ke', nullable: true })
  grnKe: number;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'is_deleted', nullable: true })
  isDeleted: number;

  @Column({ name: 'no_index', nullable: true })
  noIndex: number;

  @Column({ name: 'validasi', nullable: true })
  validasi: number;

  @Column({ name: 'note_grn', nullable: true })
  noteGrn: string;

  @Column({ name: 'date_qa', nullable: true })
  dateQa: string;

  @Column({ name: 'date_qa_close', nullable: true })
  dateQaClose: string;
}
