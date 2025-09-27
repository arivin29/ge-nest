import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_imbg', schema: 'new_bpt' })
export class NewBptOnlImbg {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_imbg' })
  idOnlImbg: number;

  @Column({ name: 'jml' })
  jml: number;

  @Column({ name: 'kondisi_fisik' })
  kondisiFisik: string;

  @Column({ name: 'luas_tanah' })
  luasTanah: string;

  @Column({ name: 'rab' })
  rab: number;

  @Column({ name: 'status_tanah' })
  statusTanah: string;
}
