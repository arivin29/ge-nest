import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'pur_pr_item', schema: 'erp_amims' })
export class AmimsPurPrItem {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'id_mpart', nullable: true })
  idMpart: string;

  @Column({ name: 'id_mpc_piro_item', nullable: true })
  idMpcPiroItem: string;

  @Column({ name: 'id_pur_pr', nullable: true })
  idPurPr: string;

  @PrimaryColumn({ name: 'id_pur_pr_item' })
  idPurPrItem: string;

  @Column({ name: 'is_deleted', nullable: true })
  isDeleted: number;

  @Column({ name: 'note_pr_item', nullable: true })
  notePrItem: string;

  @Column({ name: 'old_pr_item', nullable: true })
  oldPrItem: string;

  @Column({ name: 'priority', nullable: true })
  priority: string;

  @Column({ name: 'qty_pr', nullable: true })
  qtyPr: number;

  @Column({ name: 'qty_stock', nullable: true })
  qtyStock: number;

  @Column({ name: 'status_item', nullable: true })
  statusItem: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
