import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ito', schema: 'new_bpt' })
export class NewBptOnlIto {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ito' })
  idOnlIto: number;

  @Column({ name: 'lahan' })
  lahan: string;

  @Column({ name: 'nama_sarana' })
  namaSarana: string;

  @Column({ name: 'nomor_sipttk' })
  nomorSipttk: string;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;

  @Column({ name: 'tgl_sipttk' })
  tglSipttk: string;
}
