import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_izin_syarat_item', schema: 'new_bpt' })
export class NewBptTIzinSyaratItem {
  @Column({ name: 'acc', nullable: true })
  acc: number;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @Column({ name: 'id_izin_jenis_syarat' })
  idIzinJenisSyarat: number;

  @PrimaryColumn({ name: 'id_izin_syarat_item' })
  idIzinSyaratItem: number;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'upl_doc', nullable: true })
  uplDoc: number;
}
