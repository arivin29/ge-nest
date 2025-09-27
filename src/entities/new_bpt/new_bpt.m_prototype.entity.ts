import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'm_prototype', schema: 'new_bpt' })
export class NewBptMPrototype {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'file', nullable: true })
  file: string;

  @PrimaryColumn({ name: 'id_m_prototype' })
  idMPrototype: number;

  @Column({ name: 'jml_lnt' })
  jmlLnt: string;

  @Column({ name: 'kdb' })
  kdb: string;

  @Column({ name: 'klb' })
  klb: string;

  @Column({ name: 'luas_bangunan' })
  luasBangunan: string;

  @Column({ name: 'luas_tanah' })
  luasTanah: string;

  @Column({ name: 'retribusi' })
  retribusi: string;

  @Column({ name: 'tipe' })
  tipe: string;

  @Column({ name: 'uk_lahan' })
  ukLahan: string;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;
}
