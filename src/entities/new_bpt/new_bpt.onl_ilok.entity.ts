import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ilok', schema: 'new_bpt' })
export class NewBptOnlIlok {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ilok' })
  idOnlIlok: number;

  @Column({ name: 'luas_tanah' })
  luasTanah: string;

  @Column({ name: 'peruntukan' })
  peruntukan: string;

  @Column({ name: 'status_lahan' })
  statusLahan: string;
}
