import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'external', schema: 'new_bpt' })
export class NewBptExternal {
  @PrimaryColumn({ name: 'id_external' })
  idExternal: number;

  @Column({ name: 'nama' })
  nama: string;

  @Column({ name: 'psswrd' })
  psswrd: string;

  @Column({ name: 'tgl', default: () => 'CURRENT_TIMESTAMP' })
  tgl: string;

  @Column({ name: 'usrnm' })
  usrnm: string;
}
