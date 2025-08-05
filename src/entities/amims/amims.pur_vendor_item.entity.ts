import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'pur_vendor_item', schema: 'erp_amims' })
export class AmimsPurVendorItem {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'id_mpart', nullable: true })
  idMpart: string;

  @Column({ name: 'id_pur_vendor', nullable: true })
  idPurVendor: string;

  @PrimaryColumn({ name: 'id_pur_vendor_item' })
  idPurVendorItem: string;

  @Column({ name: 'is_deleted', nullable: true })
  isDeleted: number;

  @Column({ name: 'manufacture', nullable: true })
  manufacture: string;

  @Column({ name: 'min_order', nullable: true })
  minOrder: number;

  @Column({ name: 'note', nullable: true })
  note: string;

  @Column({ name: 'price', nullable: true })
  price: number;

  @Column({ name: 'response_time', nullable: true })
  responseTime: number;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
