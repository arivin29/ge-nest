import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'store_transfer', schema: 'erp_amims' })
export class AmimsStoreTransfer {
  @PrimaryColumn({ name: 'id_store_transfer' })
  idStoreTransfer: string;

  @Column({ name: 'date_transfer', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  dateTransfer: string;

  @Column({ name: 'status_transfer', nullable: true })
  statusTransfer: string;

  @Column({ name: 'date_received', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  dateReceived: string;

  @Column({ name: 'id_user_received', nullable: true })
  idUserReceived: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'id_engineer_pmtr', nullable: true })
  idEngineerPmtr: string;

  @Column({ name: 'validasi', nullable: true })
  validasi: number;

  @Column({ name: 'number_transfer', nullable: true })
  numberTransfer: string;

  @Column({ name: 'no_index', nullable: true })
  noIndex: number;

  @Column({ name: 'note_transfer', nullable: true })
  noteTransfer: string;

  @Column({ name: 'id_user_transfer', nullable: true })
  idUserTransfer: string;

  @Column({ name: 'is_deleted', nullable: true })
  isDeleted: number;

  @Column({ name: 'shipping_via', nullable: true })
  shippingVia: string;

  @Column({ name: 'no_of_box', nullable: true })
  noOfBox: string;

  @Column({ name: 'weight', nullable: true })
  weight: string;

  @Column({ name: 'sheet', nullable: true })
  sheet: string;

  @Column({ name: 'dimention', nullable: true })
  dimention: string;
}
