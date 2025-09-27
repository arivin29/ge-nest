import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'tokene', schema: 'new_bpt' })
export class NewBptTokene {
  @PrimaryColumn({ name: 'id_tokene' })
  idTokene: number;

  @Column({ name: 'nama' })
  nama: string;

  @Column({ name: 'tgl' })
  tgl: string;

  @Column({ name: 'tokene' })
  tokene: string;
}
