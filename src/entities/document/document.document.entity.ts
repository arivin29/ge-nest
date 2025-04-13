import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'document', schema: 'erp_document' })
export class DocumentDocument {
  @PrimaryColumn({ name: 'id_document' })
  idDocument: string;

  @Column({ name: 'for_module' })
  forModule: string;

  @Column({ name: 'for_table' })
  forTable: string;

  @Column({ name: 'for_module_id' })
  forModuleId: string;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'revisi' })
  revisi: string;

  @Column({ name: 'nomor' })
  nomor: string;

  @Column({ name: 'tanggal' })
  tanggal: string;

  @Column({ name: 'id_users' })
  idUsers: string;

  @Column({ name: 'file_name' })
  fileName: string;

  @Column({ name: 'file_ext' })
  fileExt: string;

  @Column({ name: 'file_location' })
  fileLocation: string;

  @Column({ name: 'enable_download' })
  enableDownload: string;

  @Column({ name: 'created_at' })
  createdAt: string;

  @Column({ name: 'updated_at' })
  updatedAt: string;
}
