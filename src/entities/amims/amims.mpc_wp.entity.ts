import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'mpc_wp', schema: 'erp_amims' })
export class AmimsMpcWp {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'date_acc', nullable: true })
  dateAcc: string;

  @Column({ name: 'end_date_wp', nullable: true })
  endDateWp: string;

  @Column({ name: 'end_hours', nullable: true })
  endHours: number;

  @Column({ name: 'engine_end', nullable: true })
  engineEnd: string;

  @Column({ name: 'engine_start', nullable: true })
  engineStart: string;

  @Column({ name: 'id_aircraft', nullable: true })
  idAircraft: string;

  @PrimaryColumn({ name: 'id_mpc_wp' })
  idMpcWp: string;

  @Column({ name: 'id_user_mm', nullable: true })
  idUserMm: string;

  @Column({ name: 'id_user_mpc', nullable: true })
  idUserMpc: string;

  @Column({ name: 'note_wp', nullable: true })
  noteWp: string;

  @Column({ name: 'number_wp', nullable: true })
  numberWp: string;

  @Column({ name: 'on_site', nullable: true })
  onSite: number;

  @Column({ name: 'period', nullable: true })
  period: string;

  @Column({ name: 'period_year', nullable: true })
  periodYear: number;

  @Column({ name: 'place', nullable: true })
  place: string;

  @Column({ name: 'reason', nullable: true })
  reason: string;

  @Column({ name: 'start_date_wp', nullable: true })
  startDateWp: string;

  @Column({ name: 'start_hours', nullable: true })
  startHours: number;

  @Column({ name: 'status_wp', nullable: true })
  statusWp: string;

  @Column({ name: 'type_work', nullable: true })
  typeWork: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'validated', nullable: true })
  validated: number;
}
