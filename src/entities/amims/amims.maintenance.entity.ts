import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'maintenance', schema: 'erp_amims' })
export class AmimsMaintenance {
  @PrimaryColumn({ name: 'id_maintenance' })
  idMaintenance: string;

  @Column({ name: 'id_mpart', nullable: true })
  idMpart: string;

  @Column({ name: 'id_maintenance_code', nullable: true })
  idMaintenanceCode: string;

  @Column({ name: 'cycle_from', nullable: true })
  cycleFrom: number;

  @Column({ name: 'cycle_to', nullable: true })
  cycleTo: number;

  @Column({ name: 'flight_hours_from', nullable: true })
  flightHoursFrom: number;

  @Column({ name: 'flight_hours_to', nullable: true })
  flightHoursTo: number;

  @Column({ name: 'time_range_form', nullable: true })
  timeRangeForm: number;

  @Column({ name: 'time_range_to', nullable: true })
  timeRangeTo: number;

  @Column({ name: 'alert', nullable: true })
  alert: number;

  @Column({ name: 'alert_param', nullable: true })
  alertParam: string;

  @Column({ name: 'time_unit', nullable: true })
  timeUnit: string;

  @Column({ name: 'repetitions', nullable: true })
  repetitions: number;

  @Column({ name: 'note_maintenance', nullable: true })
  noteMaintenance: string;

  @Column({ name: 'atachapter', nullable: true })
  atachapter: string;

  @Column({ name: 'type_maintenance', nullable: true })
  typeMaintenance: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'id_user', nullable: true })
  idUser: string;

  @Column({ name: 'on_location', nullable: true })
  onLocation: string;

  @Column({ name: 'old_id', nullable: true })
  oldId: string;
}
