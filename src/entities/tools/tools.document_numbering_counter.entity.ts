import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'document_numbering_counter', schema: 'erp_tools' })
export class ToolsDocumentNumberingCounter {
  @PrimaryColumn({ name: 'id_document_numbering_counter' })
  idDocumentNumberingCounter: string;

  @Column({ name: 'id_document_numbering' })
  idDocumentNumbering: string;

  @Column({ name: 'tahun' })
  tahun: number;

  @Column({ name: 'bulan', nullable: true })
  bulan: number;

  @Column({ name: 'last_number', nullable: true })
  lastNumber: number;

  @Column({ name: 'id_kantor', nullable: true })
  idKantor: string;

  @Column({ name: 'for_module', nullable: true })
  forModule: string;

  @Column({ name: 'for_module_id', nullable: true })
  forModuleId: string;

  @Column({ name: 'target_column', nullable: true })
  targetColumn: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;
}
