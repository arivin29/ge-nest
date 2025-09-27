import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_izin_arsip_lama', schema: 'new_bpt' })
export class NewBptTIzinArsipLama {
  @Column({ name: 'alamat' })
  alamat: string;

  @Column({ name: 'barcode' })
  barcode: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'file', nullable: true })
  file: string;

  @PrimaryColumn({ name: 'id_izin_arsip_lama' })
  idIzinArsipLama: number;

  @Column({ name: 'id_izin_jenis' })
  idIzinJenis: number;

  @Column({ name: 'id_izin_tipe' })
  idIzinTipe: number;

  @Column({ name: 'keterangan', nullable: true })
  keterangan: string;

  @Column({ name: 'no_sk' })
  noSk: string;

  @Column({ name: 'pemohon' })
  pemohon: string;

  @Column({ name: 'peruntukan' })
  peruntukan: string;

  @Column({ name: 'perusahaan' })
  perusahaan: string;

  @Column({ name: 'tgl_sk', nullable: true })
  tglSk: string;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;
}
