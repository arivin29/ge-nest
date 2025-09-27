import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'm_izin_jenis_action', schema: 'new_bpt' })
export class NewBptMIzinJenisAction {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'id_action' })
  idAction: number;

  @Column({ name: 'id_izin_jenis' })
  idIzinJenis: number;

  @PrimaryColumn({ name: 'id_izin_jenis_action' })
  idIzinJenisAction: number;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;
}
