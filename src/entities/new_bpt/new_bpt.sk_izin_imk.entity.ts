import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_imk', schema: 'new_bpt' })
export class NewBptSkIzinImk {
  @Column({ name: 'akta' })
  akta: string;

  @Column({ name: 'bap' })
  bap: string;

  @Column({ name: 'bapl' })
  bapl: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_imk' })
  idSkIzinImk: number;

  @Column({ name: 'jenis' })
  jenis: string;

  @Column({ name: 'klinik' })
  klinik: string;

  @Column({ name: 'nama_apoteker' })
  namaApoteker: string;

  @Column({ name: 'nama_d_a' })
  namaDA: string;

  @Column({ name: 'nama_d_b' })
  namaDB: string;

  @Column({ name: 'nomor_apoteker' })
  nomorApoteker: string;

  @Column({ name: 'nomor_d_a' })
  nomorDA: string;

  @Column({ name: 'nomor_d_b' })
  nomorDB: string;

  @Column({ name: 'nomor_surat' })
  nomorSurat: string;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;

  @Column({ name: 'rekom' })
  rekom: string;

  @Column({ name: 'sewa' })
  sewa: string;

  @Column({ name: 'sewa_menyewa2' })
  sewaMenyewa2: string;

  @Column({ name: 'tgl_rekom' })
  tglRekom: string;

  @Column({ name: 'tgl_surat' })
  tglSurat: string;
}
