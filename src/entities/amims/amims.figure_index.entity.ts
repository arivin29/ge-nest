import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'figure_index', schema: 'erp_amims' })
export class AmimsFigureIndex {
  @PrimaryColumn({ name: 'id_figure_index' })
  idFigureIndex: string;

  @Column({ name: 'id_ata', nullable: true })
  idAta: string;

  @Column({ name: 'description', nullable: true })
  description: string;

  @Column({ name: 'figure_index', nullable: true })
  figureIndex: string;

  @Column({ name: 'created_at', nullable: true })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;
}
