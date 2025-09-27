import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_izin_pemberitahuan', schema: 'new_bpt' })
export class NewBptTIzinPemberitahuan {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_izin_pem' })
  idIzinPem: number;

  @Column({ name: 'keterangan', nullable: true })
  keterangan: string;

  @Column({ name: 'status', nullable: true })
  status: boolean;

  @Column({ name: 'tanggal_pem', nullable: true })
  tanggalPem: string;

  @Column({ name: 'tgl_selesai', nullable: true })
  tglSelesai: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
