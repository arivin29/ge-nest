import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'm_target_retribusi', schema: 'new_bpt' })
export class NewBptMTargetRetribusi {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'id_izin_jenis' })
  idIzinJenis: number;

  @PrimaryColumn({ name: 'id_target_retribusi' })
  idTargetRetribusi: number;

  @Column({ name: 'retribusi' })
  retribusi: number;

  @Column({ name: 'tahun' })
  tahun: number;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;
}
