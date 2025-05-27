import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'part_figure_index', schema: 'erp_amims' })
export class AmimsPartFigureIndex {
  @PrimaryColumn({ name: 'id_part_figure_index' })
  idPartFigureIndex: string;

  @Column({ name: 'id_mpart', nullable: true })
  idMpart: string;

  @Column({ name: 'id_ata', nullable: true })
  idAta: string;

  @Column({ name: 'figure_index', nullable: true })
  figureIndex: string;

  @Column({ name: 'item_index', nullable: true })
  itemIndex: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
