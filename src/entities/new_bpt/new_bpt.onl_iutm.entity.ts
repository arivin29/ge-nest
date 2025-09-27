import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_iutm', schema: 'new_bpt' })
export class NewBptOnlIutm {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_iutm' })
  idOnlIutm: number;

  @Column({ name: 'jabatan' })
  jabatan: string;

  @Column({ name: 'luas_ruang_usaha' })
  luasRuangUsaha: string;

  @Column({ name: 'nomor_imbg' })
  nomorImbg: string;

  @Column({ name: 'nomor_sk_ho' })
  nomorSkHo: string;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;

  @Column({ name: 'peruntukan_imbg' })
  peruntukanImbg: string;
}
