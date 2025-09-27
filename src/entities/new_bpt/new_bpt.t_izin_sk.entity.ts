import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_izin_sk', schema: 'new_bpt' })
export class NewBptTIzinSk {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'daftar_ulang', nullable: true })
  daftarUlang: string;

  @Column({ name: 'file', nullable: true })
  file: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @Column({ name: 'id_izin_jenis', nullable: true })
  idIzinJenis: number;

  @Column({ name: 'id_izin_kode_arsip', nullable: true })
  idIzinKodeArsip: string;

  @PrimaryColumn({ name: 'id_izin_sk' })
  idIzinSk: number;

  @Column({ name: 'is_deleted', nullable: true })
  isDeleted: number;

  @Column({ name: 'jenis_ttd', nullable: true })
  jenisTtd: boolean;

  @Column({ name: 'no_sk', nullable: true })
  noSk: string;

  @Column({ name: 'no_urut', nullable: true })
  noUrut: number;

  @Column({ name: 'opt', nullable: true })
  opt: string;

  @Column({ name: 'size', nullable: true })
  size: number;

  @Column({ name: 'status_sk' })
  statusSk: string;

  @Column({ name: 'tanggal', nullable: true })
  tanggal: string;

  @Column({ name: 'ttd', nullable: true })
  ttd: boolean;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'ver' })
  ver: boolean;
}
