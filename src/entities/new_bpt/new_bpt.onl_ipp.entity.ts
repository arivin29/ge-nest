import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ipp', schema: 'new_bpt' })
export class NewBptOnlIpp {
  @Column({ name: 'akta' })
  akta: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ipp' })
  idOnlIpp: number;

  @Column({ name: 'jabatan' })
  jabatan: string;

  @Column({ name: 'kapasitas_parkir' })
  kapasitasParkir: string;

  @Column({ name: 'luas_parkir' })
  luasParkir: string;

  @Column({ name: 'rekom1' })
  rekom1: string;
}
