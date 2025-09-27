import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ipp', schema: 'new_bpt' })
export class NewBptSkIzinIpp {
  @Column({ name: 'akta' })
  akta: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ipp' })
  idSkIzinIpp: number;

  @Column({ name: 'jabatan' })
  jabatan: string;

  @Column({ name: 'kapasitas_parkir' })
  kapasitasParkir: string;

  @Column({ name: 'luas_parkir' })
  luasParkir: string;

  @Column({ name: 'masa_berlaku', nullable: true })
  masaBerlaku: string;

  @Column({ name: 'rekom1' })
  rekom1: string;

  @Column({ name: 'tgl_rekom', nullable: true })
  tglRekom: string;

  @Column({ name: 'tgl_surat' })
  tglSurat: string;
}
