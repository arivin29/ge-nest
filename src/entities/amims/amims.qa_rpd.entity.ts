import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'qa_rpd', schema: 'erp_amims' })
export class AmimsQaRpd {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'date_rpd', nullable: true })
  dateRpd: string;

  @PrimaryColumn({ name: 'id_qa_rpd' })
  idQaRpd: string;

  @Column({ name: 'id_user_qa', nullable: true })
  idUserQa: string;

  @Column({ name: 'number_rpd', nullable: true })
  numberRpd: string;

  @Column({ name: 'status_rpd', nullable: true })
  statusRpd: string;

  @Column({ name: 'tipe', nullable: true })
  tipe: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
