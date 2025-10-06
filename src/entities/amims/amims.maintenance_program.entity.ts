import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'maintenance_program', schema: 'erp_amims' })
export class AmimsMaintenanceProgram {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'cycle_to', nullable: true })
  cycleTo: number;

  @Column({ name: 'hours_to', nullable: true })
  hoursTo: number;

  @Column({ name: 'id_actype', nullable: true })
  idActype: string;

  @Column({ name: 'id_aircraft', nullable: true })
  idAircraft: string;

  @Column({ name: 'id_maintenance_code', nullable: true })
  idMaintenanceCode: string;

  @PrimaryColumn({ name: 'id_maintenance_program' })
  idMaintenanceProgram: string;

  @Column({ name: 'id_mpart', nullable: true })
  idMpart: string;

  @Column({ name: 'id_user', nullable: true })
  idUser: string;

  @Column({ name: 'is_active', nullable: true })
  isActive: string;

  @Column({ name: 'note', nullable: true })
  note: string;

  @Column({ name: 'program_code', nullable: true })
  programCode: string;

  @Column({ name: 'program_title', nullable: true })
  programTitle: string;

  @Column({ name: 'reference_doc', nullable: true })
  referenceDoc: string;

  @Column({ name: 'time_to', nullable: true })
  timeTo: number;

  @Column({ name: 'time_to_unit', nullable: true })
  timeToUnit: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'validasi', nullable: true })
  validasi: number;
}
