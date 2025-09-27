import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'hari_kerja', schema: 'new_bpt' })
export class NewBptHariKerja {
  @PrimaryColumn({ name: 'id_hari_kerja' })
  idHariKerja: number;

  @Column({ name: 'tanggal' })
  tanggal: string;
}
