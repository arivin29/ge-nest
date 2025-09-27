import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_iubdptp', schema: 'new_bpt' })
export class NewBptOnlIubdptp {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_iubdptp' })
  idOnlIubdptp: number;

  @Column({ name: 'nomor_kesesuaian' })
  nomorKesesuaian: string;

  @Column({ name: 'nomor_lokasi' })
  nomorLokasi: string;

  @Column({ name: 'tgl_kesesuaian' })
  tglKesesuaian: string;

  @Column({ name: 'tgl_lokasi' })
  tglLokasi: string;
}
