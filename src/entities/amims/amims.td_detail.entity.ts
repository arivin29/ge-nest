import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'td_detail', schema: 'erp_amims' })
export class AmimsTdDetail {
  @PrimaryColumn({ name: 'id_td_detail' })
  idTdDetail: string;

  @Column({ name: 'number_detail', nullable: true })
  numberDetail: string;

  @Column({ name: 'date_detail', nullable: true })
  dateDetail: string;

  @Column({ name: 'subject', nullable: true })
  subject: string;

  @Column({ name: 'id_td', nullable: true })
  idTd: string;

  @Column({ name: 'id_actype', nullable: true })
  idActype: string;

  @Column({ name: 'file_detail', nullable: true })
  fileDetail: string;

  @Column({ name: 'note_detail', nullable: true })
  noteDetail: string;

  @Column({ name: 'type_detail', nullable: true })
  typeDetail: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'applicable', nullable: true })
  applicable: string;

  @Column({ name: 'status_td_detail', nullable: true })
  statusTdDetail: string;

  @Column({ name: 'is_qc', nullable: true })
  isQc: string;

  @Column({ name: 'is_pilot', nullable: true })
  isPilot: string;

  @Column({ name: 'is_engineer', nullable: true })
  isEngineer: string;

  @Column({ name: 'priority', nullable: true })
  priority: string;

  @Column({ name: 'method', nullable: true })
  method: string;

  @Column({ name: 'validasi', nullable: true })
  validasi: number;

  @Column({ name: 'id_acc', nullable: true })
  idAcc: string;

  @Column({ name: 'date_acc', nullable: true })
  dateAcc: string;

  @Column({ name: 'id_acc_qa', nullable: true })
  idAccQa: string;

  @Column({ name: 'date_acc_qa', nullable: true })
  dateAccQa: string;
}
