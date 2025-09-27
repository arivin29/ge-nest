import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_iujprd', schema: 'new_bpt' })
export class NewBptOnlIujprd {
  @Column({ name: 'agama' })
  agama: string;

  @Column({ name: 'alamat' })
  alamat: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_iujprd' })
  idOnlIujprd: number;

  @Column({ name: 'nama_jenazah' })
  namaJenazah: string;
}
