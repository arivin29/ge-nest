import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'tech_log', schema: 'erp_amims' })
export class AmimsTechLog {
  @Column({ name: 'autho_rized', nullable: true })
  authoRized: number;

  @Column({ name: 'created_at', nullable: true })
  createdAt: string;

  @Column({ name: 'cycle_bf', nullable: true })
  cycleBf: number;

  @Column({ name: 'cycle_cf', nullable: true })
  cycleCf: number;

  @Column({ name: 'cycle_flight', nullable: true })
  cycleFlight: number;

  @Column({ name: 'date_inspection', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  dateInspection: string;

  @Column({ name: 'hours_bf', nullable: true })
  hoursBf: number;

  @Column({ name: 'hours_cf', nullable: true })
  hoursCf: number;

  @Column({ name: 'hours_flight', nullable: true })
  hoursFlight: number;

  @Column({ name: 'id_aircraft', nullable: true })
  idAircraft: string;

  @PrimaryColumn({ name: 'id_tech_log' })
  idTechLog: string;

  @Column({ name: 'id_user_acc', nullable: true })
  idUserAcc: string;

  @Column({ name: 'id_user_inspection', nullable: true })
  idUserInspection: string;

  @Column({ name: 'id_user_log', nullable: true })
  idUserLog: string;

  @Column({ name: 'is_deleted', nullable: true })
  isDeleted: number;

  @Column({ name: 'is_edit', nullable: true })
  isEdit: number;

  @Column({ name: 'last_update', nullable: true })
  lastUpdate: number;

  @Column({ name: 'note_log', nullable: true })
  noteLog: string;

  @Column({ name: 'number_log', nullable: true })
  numberLog: string;

  @Column({ name: 'number_next', nullable: true })
  numberNext: number;

  @Column({ name: 'old_id', nullable: true })
  oldId: string;

  @Column({ name: 'pesan', nullable: true })
  pesan: string;

  @Column({ name: 'place', nullable: true })
  place: number;

  @Column({ name: 'tech_log_date', nullable: true })
  techLogDate: string;

  @Column({ name: 'total_cycle', nullable: true })
  totalCycle: number;

  @Column({ name: 'total_flight', nullable: true })
  totalFlight: number;

  @Column({ name: 'total_fuel', nullable: true })
  totalFuel: number;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;

  @Column({ name: 'validasi', nullable: true })
  validasi: number;

  @Column({ name: 'xycle_input', nullable: true })
  xycleInput: number;
}
