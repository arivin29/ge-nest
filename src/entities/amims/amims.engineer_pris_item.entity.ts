import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'engineer_pris_item', schema: 'erp_amims' })
export class AmimsEngineerPrisItem {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'from_part', nullable: true })
  fromPart: string;

  @Column({ name: 'hash_tech_log', nullable: true })
  hashTechLog: string;

  @Column({ name: 'id_engineer_pris', nullable: true })
  idEngineerPris: string;

  @PrimaryColumn({ name: 'id_engineer_pris_item' })
  idEngineerPrisItem: string;

  @Column({ name: 'id_part', nullable: true })
  idPart: string;

  @Column({ name: 'id_part_remove', nullable: true })
  idPartRemove: string;

  @Column({ name: 'is_deleted', nullable: true })
  isDeleted: number;

  @Column({ name: 'note_item_pris', nullable: true })
  noteItemPris: string;

  @Column({ name: 'part_on_date', nullable: true })
  partOnDate: string;

  @Column({ name: 'qty_install', nullable: true })
  qtyInstall: number;

  @Column({ name: 'qty_pris', nullable: true })
  qtyPris: number;

  @Column({ name: 'status_item', nullable: true })
  statusItem: string;

  @Column({ name: 'tsn_cycle', nullable: true })
  tsnCycle: number;

  @Column({ name: 'tsn_hours', nullable: true })
  tsnHours: number;

  @Column({ name: 'tsn_val', nullable: true })
  tsnVal: number;

  @Column({ name: 'tso_cycle', nullable: true })
  tsoCycle: number;

  @Column({ name: 'tso_hours', nullable: true })
  tsoHours: number;

  @Column({ name: 'tso_val', nullable: true })
  tsoVal: number;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
