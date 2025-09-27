import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_iupb', schema: 'new_bpt' })
export class NewBptOnlIupb {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_iupb' })
  idOnlIupb: number;

  @Column({ name: 'nomor_kesesuaian' })
  nomorKesesuaian: string;

  @Column({ name: 'nomor_lokasi' })
  nomorLokasi: string;

  @Column({ name: 'tgl_kesesuaian' })
  tglKesesuaian: string;

  @Column({ name: 'tgl_lokasi' })
  tglLokasi: string;
}
