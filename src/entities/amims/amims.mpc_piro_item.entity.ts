import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'mpc_piro_item', schema: 'erp_amims' })
export class AmimsMpcPiroItem {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'for_figure_index', nullable: true })
  forFigureIndex: string;

  @Column({ name: 'id_mpart', nullable: true })
  idMpart: string;

  @Column({ name: 'id_mpc_piro', nullable: true })
  idMpcPiro: string;

  @PrimaryColumn({ name: 'id_mpc_piro_item' })
  idMpcPiroItem: string;

  @Column({ name: 'is_deleted', nullable: true })
  isDeleted: number;

  @Column({ name: 'note_item_piro', nullable: true })
  noteItemPiro: string;

  @Column({ name: 'priority', nullable: true })
  priority: string;

  @Column({ name: 'qty_piro', nullable: true })
  qtyPiro: number;

  @Column({ name: 'status_item', nullable: true })
  statusItem: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
