import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'document_numbering', schema: 'erp_tools' })
export class ToolsDocumentNumbering {
  @PrimaryColumn({ name: 'id_document_numbering' })
  idDocumentNumbering: string;

  @Column({ name: 'for_module' })
  forModule: string;

  @Column({ name: 'target_table' })
  targetTable: string;

  @Column({ name: 'target_column' })
  targetColumn: string;

  @Column({ name: 'label', nullable: true })
  label: string;

  @Column({ name: 'format_nomor' })
  formatNomor: string;

  @Column({ name: 'digit_nomor', nullable: true })
  digitNomor: number;

  @Column({ name: 'reset_periode', nullable: true })
  resetPeriode: string;

  @Column({ name: 'trigger_stage', nullable: true })
  triggerStage: string;

  @Column({ name: 'allow_manual_entry', nullable: true })
  allowManualEntry: boolean;

  @Column({ name: 'allowed_roles', nullable: true })
  allowedRoles: string;

  @Column({ name: 'is_active', nullable: true })
  isActive: boolean;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
