import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'pur_grn_item', schema: 'erp_amims' })
export class AmimsPurGrnItem {
  @PrimaryColumn({ name: 'id_pur_grn_item' })
  idPurGrnItem: string;

  @Column({ name: 'id_pur_grn', nullable: true })
  idPurGrn: string;

  @Column({ name: 'id_pur_po_item', nullable: true })
  idPurPoItem: string;

  @Column({ name: 'qty_grn', nullable: true })
  qtyGrn: number;

  @Column({ name: 'note_grn_item', nullable: true })
  noteGrnItem: string;

  @Column({ name: 'serial_number', nullable: true })
  serialNumber: string;

  @Column({ name: 'id_part', nullable: true })
  idPart: string;

  @Column({ name: 'status_grn', nullable: true })
  statusGrn: string;

  @Column({ name: 'id_mpart', nullable: true })
  idMpart: string;
}
