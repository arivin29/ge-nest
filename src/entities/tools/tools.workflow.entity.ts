import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'workflow', schema: 'erp_tools' })
export class ToolsWorkflow {
  @PrimaryColumn({ name: 'id_workflow' })
  idWorkflow: string;

  @Column({ name: 'nama_workflow' })
  namaWorkflow: string;

  @Column({ name: 'for_module' })
  forModule: string;

  @Column({ name: 'target_db' })
  targetDb: string;

  @Column({ name: 'target_table' })
  targetTable: string;

  @Column({ name: 'is_default', nullable: true })
  isDefault: boolean;

  @Column({ name: 'id_kantor', nullable: true })
  idKantor: string;

  @Column({ name: 'keterangan', nullable: true })
  keterangan: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'status_workflow', nullable: true })
  statusWorkflow: string;
}
