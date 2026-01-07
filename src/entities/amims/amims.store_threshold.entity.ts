import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'store_threshold', schema: 'erp_amims' })
export class AmimsStoreThreshold {
  @PrimaryColumn({ name: 'id_store_threshold' })
  idStoreThreshold: string;

  @Column({ name: 'id_mpart' })
  idMpart: string;

  @Column({ name: 'id_store', nullable: true })
  idStore: string;

  @Column({ name: 'min_stock', nullable: true })
  minStock: number;

  @Column({ name: 'max_stock', nullable: true })
  maxStock: number;

  @Column({ name: 'safety_stock', nullable: true })
  safetyStock: number;

  @Column({ name: 'reorder_point', nullable: true })
  reorderPoint: number;

  @Column({ name: 'reorder_quantity', nullable: true })
  reorderQuantity: number;

  @Column({ name: 'lead_time_days', nullable: true })
  leadTimeDays: number;

  @Column({ name: 'note', nullable: true })
  note: string;

  @Column({ name: 'is_active', nullable: true })
  isActive: boolean;

  @Column({ name: 'created_by', nullable: true })
  createdBy: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_by', nullable: true })
  updatedBy: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
