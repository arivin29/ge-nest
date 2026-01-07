import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'maintenance_program_item', schema: 'erp_amims' })
export class AmimsMaintenanceProgramItem {
  @PrimaryColumn({ name: 'id_maintenance_program_item' })
  idMaintenanceProgramItem: string;

  @Column({ name: 'id_maintenance_program' })
  idMaintenanceProgram: string;

  @Column({ name: 'id_maintenance', nullable: true })
  idMaintenance: string;

  @Column({ name: 'id_maintenance_code', nullable: true })
  idMaintenanceCode: string;

  @Column({ name: 'id_mpart', nullable: true })
  idMpart: string;

  @Column({ name: 'hours_to', nullable: true })
  hoursTo: number;

  @Column({ name: 'cycle_to', nullable: true })
  cycleTo: number;

  @Column({ name: 'time_to', nullable: true })
  timeTo: number;

  @Column({ name: 'time_to_unit', nullable: true })
  timeToUnit: string;

  @Column({ name: 'sequence_no', nullable: true })
  sequenceNo: number;

  @Column({ name: 'is_active', nullable: true })
  isActive: boolean;

  @Column({ name: 'note', nullable: true })
  note: string;

  @Column({ name: 'created_at', nullable: true })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;
}
