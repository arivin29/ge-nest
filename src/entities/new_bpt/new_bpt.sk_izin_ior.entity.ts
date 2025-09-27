import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ior', schema: 'new_bpt' })
export class NewBptSkIzinIor {
  @Column({ name: 'atas_nama' })
  atasNama: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ior' })
  idSkIzinIor: number;

  @Column({ name: 'klasifikasi_rs' })
  klasifikasiRs: string;

  @Column({ name: 'namakes' })
  namakes: string;

  @Column({ name: 'no_rekom' })
  noRekom: string;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;

  @Column({ name: 'tgl_bap' })
  tglBap: string;

  @Column({ name: 'tgl_rekom' })
  tglRekom: string;
}
