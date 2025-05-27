import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'stock', schema: 'erp_amims' })
export class AmimsStock {
  @Column({ name: 'status_on_inventory', nullable: true })
  statusOnInventory: string;

  @PrimaryColumn({ name: 'id_mpart' })
  idMpart: string;

  @Column({ name: 'qty', nullable: true })
  qty: number;

  @Column({ name: 'part_number', nullable: true })
  partNumber: string;

  @Column({ name: 'keyword', nullable: true })
  keyword: string;

  @Column({ name: 'unit', nullable: true })
  unit: string;

  @Column({ name: 'mfigure_index', nullable: true })
  mfigureIndex: string;

  @Column({ name: 'mitem_index', nullable: true })
  mitemIndex: string;

  @Column({ name: 'code_ata', nullable: true })
  codeAta: string;

  @Column({ name: 'partid', nullable: true })
  partid: string;

  @Column({ name: 'bin', nullable: true })
  bin: string;
}
