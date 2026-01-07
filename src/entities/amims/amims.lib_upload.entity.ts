import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'lib_upload', schema: 'erp_amims' })
export class AmimsLibUpload {
  @PrimaryColumn({ name: 'id_lib_upload' })
  idLibUpload: string;

  @Column({ name: 'file_name', nullable: true })
  fileName: string;

  @Column({ name: 'for_module', nullable: true })
  forModule: string;

  @Column({ name: 'id_module', nullable: true })
  idModule: string;

  @Column({ name: 'file_number', nullable: true })
  fileNumber: string;

  @Column({ name: 'category', nullable: true })
  category: string;

  @Column({ name: 'file_date', nullable: true })
  fileDate: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
