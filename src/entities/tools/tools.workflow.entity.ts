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

  @Column({ name: 'is_default' })
  isDefault: boolean;

  @Column({ name: 'id_kantor' })
  idKantor: string;

  @Column({ name: 'keterangan' })
  keterangan: string;

  @Column({ name: 'created_at' })
  createdAt: string;

  @Column({ name: 'updated_at' })
  updatedAt: string;
}
