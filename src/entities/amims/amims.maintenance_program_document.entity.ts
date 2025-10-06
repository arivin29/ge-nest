import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'maintenance_program_document', schema: 'erp_amims' })
export class AmimsMaintenanceProgramDocument {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'from', nullable: true })
  from: string;

  @Column({ name: 'id_maintenance_document' })
  idMaintenanceDocument: string;

  @Column({ name: 'id_maintenance_program' })
  idMaintenanceProgram: string;

  @PrimaryColumn({ name: 'id_maintenance_program_document' })
  idMaintenanceProgramDocument: string;

  @Column({ name: 'keterangan', nullable: true })
  keterangan: string;

  @Column({ name: 'reference', nullable: true })
  reference: string;

  @Column({ name: 'revisi', nullable: true })
  revisi: string;

  @Column({ name: 'revision', nullable: true })
  revision: string;

  @Column({ name: 'title', nullable: true })
  title: string;

  @Column({ name: 'workshet_form', nullable: true })
  workshetForm: string;
}
