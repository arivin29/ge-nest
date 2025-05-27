import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'tech_defect', schema: 'erp_amims' })
export class AmimsTechDefect {
  @PrimaryColumn({ name: 'id_tech_defect' })
  idTechDefect: string;

  @Column({ name: 'id_part_install', nullable: true })
  idPartInstall: string;

  @Column({ name: 'id_part', nullable: true })
  idPart: string;

  @Column({ name: 'id_aircraft', nullable: true })
  idAircraft: string;

  @Column({ name: 'date_defect', nullable: true })
  dateDefect: string;

  @Column({ name: 'id_tech_log', nullable: true })
  idTechLog: string;

  @Column({ name: 'done_cycle', nullable: true })
  doneCycle: number;

  @Column({ name: 'done_hours', nullable: true })
  doneHours: number;

  @Column({ name: 'done_date', nullable: true })
  doneDate: string;

  @Column({ name: 'status_defect', nullable: true })
  statusDefect: string;

  @Column({ name: 'user_sign', nullable: true })
  userSign: string;

  @Column({ name: 'note_defect', nullable: true })
  noteDefect: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'id_engineer_rti', nullable: true })
  idEngineerRti: string;
}
