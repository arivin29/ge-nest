import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_isalon', schema: 'new_bpt' })
export class NewBptSkIzinIsalon {
  @Column({ name: 'bap_lapangan' })
  bapLapangan: string;

  @Column({ name: 'bidang_kegiatan' })
  bidangKegiatan: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_isalon' })
  idSkIzinIsalon: number;

  @Column({ name: 'nomor_bap' })
  nomorBap: string;

  @Column({ name: 'nomor_surat' })
  nomorSurat: string;

  @Column({ name: 'rekom' })
  rekom: string;

  @Column({ name: 'tgl_bap' })
  tglBap: string;

  @Column({ name: 'tgl_bap_lapangan' })
  tglBapLapangan: string;
}
