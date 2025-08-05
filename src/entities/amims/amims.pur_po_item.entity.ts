import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'pur_po_item', schema: 'erp_amims' })
export class AmimsPurPoItem {
  @Column({ name: 'edd', nullable: true })
  edd: number;

  @Column({ name: 'id_engineer_rti', nullable: true })
  idEngineerRti: string;

  @Column({ name: 'id_mpart', nullable: true })
  idMpart: string;

  @Column({ name: 'id_part', nullable: true })
  idPart: string;

  @Column({ name: 'id_pur_po', nullable: true })
  idPurPo: string;

  @PrimaryColumn({ name: 'id_pur_po_item' })
  idPurPoItem: string;

  @Column({ name: 'id_pur_pr_item', nullable: true })
  idPurPrItem: string;

  @Column({ name: 'id_pur_prcl', nullable: true })
  idPurPrcl: string;

  @Column({ name: 'id_qa_rpd', nullable: true })
  idQaRpd: string;

  @Column({ name: 'note_po_item', nullable: true })
  notePoItem: string;

  @Column({ name: 'old_po_item', nullable: true })
  oldPoItem: string;

  @Column({ name: 'price', nullable: true })
  price: number;

  @Column({ name: 'priority_po_item', nullable: true })
  priorityPoItem: string;

  @Column({ name: 'qty_po', nullable: true })
  qtyPo: number;

  @Column({ name: 'total_qty_grn', nullable: true })
  totalQtyGrn: number;

  @Column({ name: 'tsn_cycle', nullable: true })
  tsnCycle: number;

  @Column({ name: 'tsn_hours', nullable: true })
  tsnHours: number;

  @Column({ name: 'tsn_val', nullable: true })
  tsnVal: number;

  @Column({ name: 'tsn_var', nullable: true })
  tsnVar: string;

  @Column({ name: 'tso_cycle', nullable: true })
  tsoCycle: number;

  @Column({ name: 'tso_hours', nullable: true })
  tsoHours: number;

  @Column({ name: 'tso_val', nullable: true })
  tsoVal: number;

  @Column({ name: 'tso_var', nullable: true })
  tsoVar: string;

  @Column({ name: 'waranty_start_cycle', nullable: true })
  warantyStartCycle: number;

  @Column({ name: 'waranty_start_date', nullable: true })
  warantyStartDate: string;

  @Column({ name: 'waranty_start_days', nullable: true })
  warantyStartDays: number;

  @Column({ name: 'waranty_start_hours', nullable: true })
  warantyStartHours: number;
}
