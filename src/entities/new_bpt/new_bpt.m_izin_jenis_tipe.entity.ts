import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'm_izin_jenis_tipe', schema: 'new_bpt' })
export class NewBptMIzinJenisTipe {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'id_izin_jenis' })
  idIzinJenis: number;

  @Column({ name: 'id_izin_jenis_kategori' })
  idIzinJenisKategori: number;

  @PrimaryColumn({ name: 'id_izin_jenis_tipe' })
  idIzinJenisTipe: number;

  @Column({ name: 'id_izin_tipe' })
  idIzinTipe: number;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;
}
