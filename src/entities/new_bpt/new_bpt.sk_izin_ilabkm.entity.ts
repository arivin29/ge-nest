import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ilabkm', schema: 'new_bpt' })
export class NewBptSkIzinIlabkm {
  @PrimaryColumn({ name: 'id_sk_izin_ilabkm' })
  idSkIzinIlabkm: number;

  @Column({ name: 'klasifikasi' })
  klasifikasi: string;

  @Column({ name: 'nama_lab' })
  namaLab: string;

  @Column({ name: 'no_bap' })
  noBap: string;

  @Column({ name: 'no_rekom' })
  noRekom: string;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;

  @Column({ name: 'tgl_bap_lap' })
  tglBapLap: string;

  @Column({ name: 'tgl_rekom' })
  tglRekom: string;
}
