import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'pur_return', schema: 'erp_amims' })
export class AmimsPurReturn {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'date_deadline_return', nullable: true })
  dateDeadlineReturn: string;

  @Column({ name: 'date_return', nullable: true })
  dateReturn: string;

  @Column({ name: 'id_pur_po', nullable: true })
  idPurPo: string;

  @PrimaryColumn({ name: 'id_pur_return' })
  idPurReturn: string;

  @Column({ name: 'id_pur_vendor', nullable: true })
  idPurVendor: string;

  @Column({ name: 'id_user', nullable: true })
  idUser: string;

  @Column({ name: 'is_deleted', nullable: true })
  isDeleted: number;

  @Column({ name: 'note_return', nullable: true })
  noteReturn: string;

  @Column({ name: 'number_return', nullable: true })
  numberReturn: string;

  @Column({ name: 'status_return', nullable: true })
  statusReturn: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'validasi', nullable: true })
  validasi: number;
}
