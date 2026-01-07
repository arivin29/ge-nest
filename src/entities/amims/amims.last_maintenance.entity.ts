import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'last_maintenance', schema: 'erp_amims' })
export class AmimsLastMaintenance {
  @PrimaryColumn({ name: 'id_last_maintenance' })
  idLastMaintenance: string;

  @Column({ name: 'id_wp_jo', nullable: true })
  idWpJo: string;

  @Column({ name: 'id_maintenance', nullable: true })
  idMaintenance: string;

  @Column({ name: 'last_date', nullable: true })
  lastDate: string;

  @Column({ name: 'last_cycle', nullable: true })
  lastCycle: number;

  @Column({ name: 'last_hours', nullable: true })
  lastHours: number;

  @Column({ name: 'id_part', nullable: true })
  idPart: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'id_user', nullable: true })
  idUser: string;

  @Column({ name: 'type_of_work', nullable: true })
  typeOfWork: number;

  @Column({ name: 'parent_cycle', nullable: true })
  parentCycle: number;

  @Column({ name: 'parent_hours', nullable: true })
  parentHours: number;

  @Column({ name: 'old_id', nullable: true })
  oldId: string;
}
