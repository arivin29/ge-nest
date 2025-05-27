import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'pur_return_item', schema: 'erp_amims' })
export class AmimsPurReturnItem {
  @PrimaryColumn({ name: 'id_pur_return_item' })
  idPurReturnItem: string;

  @Column({ name: 'id_pur_return', nullable: true })
  idPurReturn: string;

  @Column({ name: 'id_pur_po_item', nullable: true })
  idPurPoItem: string;

  @Column({ name: 'qty_return', nullable: true })
  qtyReturn: number;

  @Column({ name: 'note_return_item', nullable: true })
  noteReturnItem: string;

  @Column({ name: 'id_pur_grn_item', nullable: true })
  idPurGrnItem: string;

  @Column({ name: 'status_item', nullable: true })
  statusItem: number;

  @Column({ name: 'id_mpart', nullable: true })
  idMpart: string;
}
