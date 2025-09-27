import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_nirp3hgu', schema: 'new_bpt' })
export class NewBptOnlNirp3hgu {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_nirp3hgu' })
  idOnlNirp3hgu: number;

  @Column({ name: 'no_sk' })
  noSk: string;

  @Column({ name: 'tgl_sk' })
  tglSk: string;
}
