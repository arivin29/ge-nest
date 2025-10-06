import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'wp', schema: 'erp_amims' })
export class AmimsWp {
  @Column({ name: 'airframe_end_hours', nullable: true })
  airframeEndHours: number;

  @Column({ name: 'airframe_start_hours', nullable: true })
  airframeStartHours: number;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'end_date_wp', nullable: true })
  endDateWp: string;

  @Column({ name: 'engine_dua', nullable: true })
  engineDua: string;

  @Column({ name: 'engine_dua_end', nullable: true })
  engineDuaEnd: number;

  @Column({ name: 'engine_dua_start', nullable: true })
  engineDuaStart: number;

  @Column({ name: 'engine_satu', nullable: true })
  engineSatu: string;

  @Column({ name: 'engine_satu_end', nullable: true })
  engineSatuEnd: number;

  @Column({ name: 'engine_satu_start', nullable: true })
  engineSatuStart: number;

  @Column({ name: 'id_aircraft', nullable: true })
  idAircraft: string;

  @Column({ name: 'id_site', nullable: true })
  idSite: string;

  @Column({ name: 'id_user', nullable: true })
  idUser: string;

  @Column({ name: 'id_user_mm', nullable: true })
  idUserMm: string;

  @PrimaryColumn({ name: 'id_wp' })
  idWp: string;

  @Column({ name: 'note_wp', nullable: true })
  noteWp: string;

  @Column({ name: 'number_wp', nullable: true })
  numberWp: string;

  @Column({ name: 'period', nullable: true })
  period: string;

  @Column({ name: 'period_year', nullable: true })
  periodYear: number;

  @Column({ name: 'place', nullable: true })
  place: string;

  @Column({ name: 'prepared_by', nullable: true })
  preparedBy: string;

  @Column({ name: 'reason', nullable: true })
  reason: string;

  @Column({ name: 'start_date_wp', nullable: true })
  startDateWp: string;

  @Column({ name: 'status_wp', nullable: true })
  statusWp: string;

  @Column({ name: 'type_work', nullable: true })
  typeWork: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'validasi', nullable: true })
  validasi: number;
}
