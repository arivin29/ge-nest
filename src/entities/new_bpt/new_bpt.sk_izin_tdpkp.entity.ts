import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_tdpkp', schema: 'new_bpt' })
export class NewBptSkIzinTdpkp {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_tdpkp' })
  idSkIzinTdpkp: number;

  @Column({ name: 'jk' })
  jk: number;

  @Column({ name: 'no_teknis' })
  noTeknis: string;

  @Column({ name: 'pelatihan' })
  pelatihan: string;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;

  @Column({ name: 'tgl_reg' })
  tglReg: string;

  @Column({ name: 'tgl_teknis' })
  tglTeknis: string;
}
