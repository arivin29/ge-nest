import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'engineer_pmtr_item', schema: 'erp_amims' })
export class AmimsEngineerPmtrItem {
  @PrimaryColumn({ name: 'id_engineer_pmtr_item' })
  idEngineerPmtrItem: string;

  @Column({ name: 'id_mpart', nullable: true })
  idMpart: string;

  @Column({ name: 'qty_pmtr', nullable: true })
  qtyPmtr: number;

  @Column({ name: 'note_item_pmtr', nullable: true })
  noteItemPmtr: string;

  @Column({ name: 'priority', nullable: true })
  priority: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'id_engineer_pmtr', nullable: true })
  idEngineerPmtr: string;

  @Column({ name: 'figure_index', nullable: true })
  figureIndex: string;
}
