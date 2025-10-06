import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'maintenance_program_task', schema: 'erp_amims' })
export class AmimsMaintenanceProgramTask {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'id_maintenance', nullable: true })
  idMaintenance: string;

  @Column({ name: 'id_maintenance_program' })
  idMaintenanceProgram: string;

  @PrimaryColumn({ name: 'id_maintenance_program_task' })
  idMaintenanceProgramTask: string;

  @Column({ name: 'note_task', nullable: true })
  noteTask: string;

  @Column({ name: 'urutan', nullable: true })
  urutan: number;
}
