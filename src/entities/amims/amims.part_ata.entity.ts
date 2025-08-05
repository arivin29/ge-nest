import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'part_ata', schema: 'erp_amims' })
export class AmimsPartAta {
  @Column({ name: 'figure', nullable: true })
  figure: string;

  @Column({ name: 'id_ata', nullable: true })
  idAta: string;

  @Column({ name: 'id_mpart', nullable: true })
  idMpart: string;

  @PrimaryColumn({ name: 'id_part_ata' })
  idPartAta: string;

  @Column({ name: 'item', nullable: true })
  item: string;
}
