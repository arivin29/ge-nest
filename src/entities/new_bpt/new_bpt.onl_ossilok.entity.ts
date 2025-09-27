import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ossilok', schema: 'new_bpt' })
export class NewBptOnlOssilok {
  @Column({ name: 'alatmesin', nullable: true })
  alatmesin: number;

  @Column({ name: 'bangunan', nullable: true })
  bangunan: number;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ossilok' })
  idOnlOssilok: number;

  @Column({ name: 'nib' })
  nib: string;

  @Column({ name: 'no_pertek' })
  noPertek: string;

  @Column({ name: 'tanah', nullable: true })
  tanah: number;

  @Column({ name: 'tgl_ilok' })
  tglIlok: string;

  @Column({ name: 'tgl_pertek' })
  tglPertek: string;

  @Column({ name: 'tkp', nullable: true })
  tkp: number;

  @Column({ name: 'tkw', nullable: true })
  tkw: number;
}
