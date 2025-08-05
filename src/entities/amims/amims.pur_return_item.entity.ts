import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'pur_return_item', schema: 'erp_amims' })
export class AmimsPurReturnItem {
  @Column({ name: 'id_mpart', nullable: true })
  idMpart: string;

  @Column({ name: 'id_pur_grn_item', nullable: true })
  idPurGrnItem: string;

  @Column({ name: 'id_pur_po_item', nullable: true })
  idPurPoItem: string;

  @Column({ name: 'id_pur_return', nullable: true })
  idPurReturn: string;

  @PrimaryColumn({ name: 'id_pur_return_item' })
  idPurReturnItem: string;

  @Column({ name: 'note_return_item', nullable: true })
  noteReturnItem: string;

  @Column({ name: 'qty_return', nullable: true })
  qtyReturn: number;

  @Column({ name: 'status_item', nullable: true })
  statusItem: number;
}
