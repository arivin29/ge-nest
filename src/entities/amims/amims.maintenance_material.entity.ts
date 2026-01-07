import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'maintenance_material', schema: 'erp_amims' })
export class AmimsMaintenanceMaterial {
  @PrimaryColumn({ name: 'id_maintenance_material' })
  idMaintenanceMaterial: string;

  @Column({ name: 'id_maintenance', nullable: true })
  idMaintenance: string;

  @Column({ name: 'item_type', nullable: true })
  itemType: string;

  @Column({ name: 'id_mpart', nullable: true })
  idMpart: string;

  @Column({ name: 'item_name', nullable: true })
  itemName: string;

  @Column({ name: 'part_number', nullable: true })
  partNumber: string;

  @Column({ name: 'tool_code', nullable: true })
  toolCode: string;

  @Column({ name: 'quantity', nullable: true })
  quantity: number;

  @Column({ name: 'unit', nullable: true })
  unit: string;

  @Column({ name: 'is_special_tool', nullable: true })
  isSpecialTool: boolean;

  @Column({ name: 'status', nullable: true })
  status: string;

  @Column({ name: 'created_at', nullable: true })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;
}
