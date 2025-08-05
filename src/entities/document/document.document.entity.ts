import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'document', schema: 'erp_document' })
export class DocumentDocument {
  @Column({ name: 'created_at', nullable: true })
  createdAt: string;

  @Column({ name: 'enable_download', nullable: true })
  enableDownload: string;

  @Column({ name: 'file_ext', nullable: true })
  fileExt: string;

  @Column({ name: 'file_location', nullable: true })
  fileLocation: string;

  @Column({ name: 'file_name', nullable: true })
  fileName: string;

  @Column({ name: 'for_module', nullable: true })
  forModule: string;

  @Column({ name: 'for_module_id', nullable: true })
  forModuleId: string;

  @Column({ name: 'for_table', nullable: true })
  forTable: string;

  @PrimaryColumn({ name: 'id_document' })
  idDocument: string;

  @Column({ name: 'id_users', nullable: true })
  idUsers: string;

  @Column({ name: 'name', nullable: true })
  name: string;

  @Column({ name: 'nomor', nullable: true })
  nomor: string;

  @Column({ name: 'revisi', nullable: true })
  revisi: string;

  @Column({ name: 'tanggal', nullable: true })
  tanggal: string;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;
}
