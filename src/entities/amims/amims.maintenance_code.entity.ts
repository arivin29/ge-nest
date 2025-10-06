import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'maintenance_code', schema: 'erp_amims' })
export class AmimsMaintenanceCode {
  @Column({ name: 'classification', nullable: true })
  classification: string;

  @Column({ name: 'created_at', nullable: true })
  createdAt: string;

  @Column({ name: 'description_maintenance', nullable: true })
  descriptionMaintenance: string;

  @PrimaryColumn({ name: 'id_maintenance_code' })
  idMaintenanceCode: string;

  @Column({ name: 'is_deleted', nullable: true })
  isDeleted: number;

  @Column({ name: 'maintenance_code', nullable: true })
  maintenanceCode: string;

  @Column({ name: 'old_id', nullable: true })
  oldId: string;

  @Column({ name: 'reference', nullable: true })
  reference: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
