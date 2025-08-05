import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'inspection', schema: 'erp_amims' })
export class AmimsInspection {
  @Column({ name: 'atachapter', nullable: true })
  atachapter: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'cycle_to', nullable: true })
  cycleTo: number;

  @Column({ name: 'flight_hours_to', nullable: true })
  flightHoursTo: number;

  @Column({ name: 'id_aircraft', nullable: true })
  idAircraft: string;

  @PrimaryColumn({ name: 'id_inspection' })
  idInspection: string;

  @Column({ name: 'id_maintenance_code', nullable: true })
  idMaintenanceCode: string;

  @Column({ name: 'id_part', nullable: true })
  idPart: string;

  @Column({ name: 'id_user', nullable: true })
  idUser: string;

  @Column({ name: 'note_inspection', nullable: true })
  noteInspection: string;

  @Column({ name: 'old_id', nullable: true })
  oldId: string;

  @Column({ name: 'repetitions', nullable: true })
  repetitions: number;

  @Column({ name: 'time_range_to', nullable: true })
  timeRangeTo: number;

  @Column({ name: 'time_unit', nullable: true })
  timeUnit: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
