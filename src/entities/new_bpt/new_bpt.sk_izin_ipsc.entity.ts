import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ipsc', schema: 'new_bpt' })
export class NewBptSkIzinIpsc {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ipsc' })
  idSkIzinIpsc: number;

  @Column({ name: 'nama_psc' })
  namaPsc: string;

  @Column({ name: 'no_bap' })
  noBap: string;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;

  @Column({ name: 'tgl_bap_lap' })
  tglBapLap: string;
}
