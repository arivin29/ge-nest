import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_notifikasi_oss', schema: 'new_bpt' })
export class NewBptTNotifikasiOss {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_t_notifikasi_oss' })
  idTNotifikasiOss: number;

  @Column({ name: 'nama_file' })
  namaFile: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
