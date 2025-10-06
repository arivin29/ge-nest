import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'maintenance_program_material', schema: 'erp_amims' })
export class AmimsMaintenanceProgramMaterial {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'id_maintenance_program' })
  idMaintenanceProgram: string;

  @PrimaryColumn({ name: 'id_maintenance_program_material' })
  idMaintenanceProgramMaterial: string;

  @Column({ name: 'id_mpart', nullable: true })
  idMpart: string;

  @Column({ name: 'item_name', nullable: true })
  itemName: string;

  @Column({ name: 'item_type', nullable: true })
  itemType: string;

  @Column({ name: 'part_number', nullable: true })
  partNumber: string;

  @Column({ name: 'quantity', nullable: true })
  quantity: number;

  @Column({ name: 'status', nullable: true })
  status: string;

  @Column({ name: 'tool_code', nullable: true })
  toolCode: string;

  @Column({ name: 'unit', nullable: true })
  unit: string;
}
