import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_perusahaan_kekayaan', schema: 'new_bpt' })
export class NewBptTPerusahaanKekayaan {
  @Column({ name: 'asing' })
  asing: number;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @Column({ name: 'id_perusahaan' })
  idPerusahaan: number;

  @PrimaryColumn({ name: 'id_perusahaan_kekayaan' })
  idPerusahaanKekayaan: number;

  @Column({ name: 'nasional' })
  nasional: number;

  @Column({ name: 'nilai_kekayaan' })
  nilaiKekayaan: number;

  @Column({ name: 'nilai_saham' })
  nilaiSaham: number;

  @Column({ name: 'tanggal' })
  tanggal: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
