import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'engineer_pris_return_item', schema: 'erp_amims' })
export class AmimsEngineerPrisReturnItem {
  @PrimaryColumn({ name: 'id_engineer_pris_return_item' })
  idEngineerPrisReturnItem: string;

  @Column({ name: 'id_engineer_pris_item', nullable: true })
  idEngineerPrisItem: string;

  @Column({ name: 'qty_return', nullable: true })
  qtyReturn: number;

  @Column({ name: 'is_accept', nullable: true })
  isAccept: string;
}
