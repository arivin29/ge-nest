import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ikke', schema: 'new_bpt' })
export class NewBptSkIzinIkke {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ikke' })
  idSkIzinIkke: number;

  @Column({ name: 'klasifikasi_klinik' })
  klasifikasiKlinik: string;

  @Column({ name: 'rekom' })
  rekom: string;

  @Column({ name: 'tgl' })
  tgl: string;

  @Column({ name: 'tgl_bap' })
  tglBap: string;

  @Column({ name: 'tgl_bapl' })
  tglBapl: string;
}
