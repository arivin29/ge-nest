import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'tech_log_jo', schema: 'erp_amims' })
export class AmimsTechLogJo {
  @PrimaryColumn({ name: 'id_tech_log_jo' })
  idTechLogJo: string;

  @Column({ name: 'id_mpc_jo', nullable: true })
  idMpcJo: string;

  @Column({ name: 'id_part', nullable: true })
  idPart: string;

  @Column({ name: 'date_close', nullable: true })
  dateClose: string;

  @Column({ name: 'time_close', nullable: true })
  timeClose: string;

  @Column({ name: 'id_tech_log', nullable: true })
  idTechLog: string;

  @Column({ name: 'is_continue', nullable: true })
  isContinue: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'id_tech_log_close', nullable: true })
  idTechLogClose: string;
}
