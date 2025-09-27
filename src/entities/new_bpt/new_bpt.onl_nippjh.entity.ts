import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_nippjh', schema: 'new_bpt' })
export class NewBptOnlNippjh {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_nippjh' })
  idOnlNippjh: number;

  @Column({ name: 'nomor_kesesuaian' })
  nomorKesesuaian: string;

  @Column({ name: 'tgl_kesesuaian' })
  tglKesesuaian: string;
}
