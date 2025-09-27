import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_pemberi_file', schema: 'new_bpt' })
export class NewBptTPemberiFile {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'date_upload', default: () => 'CURRENT_TIMESTAMP' })
  dateUpload: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_t_pemberi_kolom' })
  idTPemberiKolom: number;

  @Column({ name: 'nama_file' })
  namaFile: string;

  @Column({ name: 'note' })
  note: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
