import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'pilot', schema: 'erp_amims' })
export class AmimsPilot {
  @PrimaryColumn({ name: 'id_pilot' })
  idPilot: string;

  @Column({ name: 'name_pilot', nullable: true })
  namePilot: string;

  @Column({ name: 'status', nullable: true })
  status: number;

  @Column({ name: 'type', nullable: true })
  type: string;

  @Column({ name: 'hash_id_user', nullable: true })
  hashIdUser: number;

  @Column({ name: 'is_deleted', nullable: true })
  isDeleted: number;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
