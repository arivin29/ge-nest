import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_nirpih', schema: 'new_bpt' })
export class NewBptSkIzinNirpih {
  @Column({ name: 'balai_besar' })
  balaiBesar: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_nirpih' })
  idSkIzinNirpih: number;

  @Column({ name: 'import' })
  import: string;

  @Column({ name: 'instalasi' })
  instalasi: string;

  @Column({ name: 'no_surat' })
  noSurat: string;

  @Column({ name: 'nomor_rekom' })
  nomorRekom: string;

  @Column({ name: 'nomor_siup' })
  nomorSiup: string;

  @Column({ name: 'nomor_tdp' })
  nomorTdp: string;

  @Column({ name: 'nomor_tdup' })
  nomorTdup: string;

  @Column({ name: 'nomor_teknis' })
  nomorTeknis: string;

  @Column({ name: 'perihal' })
  perihal: string;

  @Column({ name: 'sk_pajak' })
  skPajak: string;

  @Column({ name: 'tgl_nomor' })
  tglNomor: string;

  @Column({ name: 'tgl_rekom' })
  tglRekom: string;

  @Column({ name: 'tgl_siup' })
  tglSiup: string;

  @Column({ name: 'tgl_surat' })
  tglSurat: string;

  @Column({ name: 'tgl_tdp' })
  tglTdp: string;

  @Column({ name: 'tgl_tdup' })
  tglTdup: string;
}
