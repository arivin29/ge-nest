import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_perusahaan_file', schema: 'new_bpt' })
export class NewBptTPerusahaanFile {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'date_upload', default: () => 'CURRENT_TIMESTAMP' })
  dateUpload: string;

  @PrimaryColumn({ name: 'id_file' })
  idFile: number;

  @Column({ name: 'id_izin', nullable: true })
  idIzin: number;

  @Column({ name: 'id_perusahaan', nullable: true })
  idPerusahaan: number;

  @Column({ name: 'nama_file' })
  namaFile: string;

  @Column({ name: 'note' })
  note: string;

  @Column({ name: 'paths' })
  paths: string;

  @Column({ name: 'type_file' })
  typeFile: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
