import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_io', schema: 'new_bpt' })
export class NewBptSkIzinIo {
  @Column({ name: 'badan_usaha' })
  badanUsaha: string;

  @Column({ name: 'bah' })
  bah: string;

  @Column({ name: 'bah_tgl' })
  bahTgl: string;

  @Column({ name: 'bap' })
  bap: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_io' })
  idSkIzinIo: number;

  @Column({ name: 'nama_optik', nullable: true })
  namaOptik: string;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;

  @Column({ name: 'rekom' })
  rekom: string;

  @Column({ name: 'tgl_bap' })
  tglBap: string;

  @Column({ name: 'tgl_surat' })
  tglSurat: string;
}
