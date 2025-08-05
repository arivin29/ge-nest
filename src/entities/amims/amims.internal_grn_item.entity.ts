import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'internal_grn_item', schema: 'erp_amims' })
export class AmimsInternalGrnItem {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'id_engineer_pris_item', nullable: true })
  idEngineerPrisItem: string;

  @Column({ name: 'id_internal_grn', nullable: true })
  idInternalGrn: string;

  @PrimaryColumn({ name: 'id_internal_grn_item' })
  idInternalGrnItem: string;

  @Column({ name: 'id_mpart', nullable: true })
  idMpart: string;

  @Column({ name: 'id_part', nullable: true })
  idPart: string;

  @Column({ name: 'qty_grn', nullable: true })
  qtyGrn: number;

  @Column({ name: 'remark', nullable: true })
  remark: string;

  @Column({ name: 'status_item', nullable: true })
  statusItem: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
