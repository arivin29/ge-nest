import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_pinjam', schema: 'new_bpt' })
export class NewBptTPinjam {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_pinjam' })
  idPinjam: number;

  @Column({ name: 'nama_peminjam' })
  namaPeminjam: string;

  @Column({ name: 'petugas_kembali', nullable: true })
  petugasKembali: string;

  @Column({ name: 'petugas_pinjam' })
  petugasPinjam: string;

  @Column({ name: 'status_pinjam' })
  statusPinjam: number;

  @Column({ name: 'tgl_kembali', nullable: true })
  tglKembali: string;

  @Column({ name: 'tgl_pinjam' })
  tglPinjam: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
