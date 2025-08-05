import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'workflow', schema: 'erp_tools' })
export class ToolsWorkflow {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'for_module' })
  forModule: string;

  @Column({ name: 'id_kantor', nullable: true })
  idKantor: string;

  @PrimaryColumn({ name: 'id_workflow' })
  idWorkflow: string;

  @Column({ name: 'is_default', nullable: true })
  isDefault: boolean;

  @Column({ name: 'keterangan', nullable: true })
  keterangan: string;

  @Column({ name: 'nama_workflow' })
  namaWorkflow: string;

  @Column({ name: 'status_field', nullable: true })
  statusField: string;

  @Column({ name: 'status_workflow', nullable: true })
  statusWorkflow: string;

  @Column({ name: 'target_db' })
  targetDb: string;

  @Column({ name: 'target_table' })
  targetTable: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
