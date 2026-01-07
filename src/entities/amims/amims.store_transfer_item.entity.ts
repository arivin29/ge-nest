import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'store_transfer_item', schema: 'erp_amims' })
export class AmimsStoreTransferItem {
  @PrimaryColumn({ name: 'id_store_transfer_item' })
  idStoreTransferItem: string;

  @Column({ name: 'id_part', nullable: true })
  idPart: string;

  @Column({ name: 'id_store_transfer', nullable: true })
  idStoreTransfer: string;

  @Column({ name: 'id_engineer_pmtr_item', nullable: true })
  idEngineerPmtrItem: string;

  @Column({ name: 'note_item_transfer', nullable: true })
  noteItemTransfer: string;

  @Column({ name: 'qty_transfer', nullable: true })
  qtyTransfer: number;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'status_item', nullable: true })
  statusItem: string;

  @Column({ name: 'new_bin', nullable: true })
  newBin: string;

  @Column({ name: 'old_id_part', nullable: true })
  oldIdPart: string;
}
