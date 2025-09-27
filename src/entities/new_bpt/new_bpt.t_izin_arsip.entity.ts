import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_izin_arsip', schema: 'new_bpt' })
export class NewBptTIzinArsip {
  @Column({ name: 'box', nullable: true })
  box: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'id_izin', nullable: true })
  idIzin: number;

  @PrimaryColumn({ name: 'id_izin_arsip' })
  idIzinArsip: number;

  @Column({ name: 'keterangan', nullable: true })
  keterangan: string;

  @Column({ name: 'rak', nullable: true })
  rak: string;

  @Column({ name: 'sampul', nullable: true })
  sampul: string;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;
}
