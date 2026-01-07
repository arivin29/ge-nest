import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'pur_vendor', schema: 'erp_amims' })
export class AmimsPurVendor {
  @PrimaryColumn({ name: 'id_pur_vendor' })
  idPurVendor: string;

  @Column({ name: 'name_vendor', nullable: true })
  nameVendor: string;

  @Column({ name: 'keyword', nullable: true })
  keyword: string;

  @Column({ name: 'code', nullable: true })
  code: string;

  @Column({ name: 'postcode', nullable: true })
  postcode: string;

  @Column({ name: 'default_currency', nullable: true })
  defaultCurrency: string;

  @Column({ name: 'timezone', nullable: true })
  timezone: string;

  @Column({ name: 'address', nullable: true })
  address: string;

  @Column({ name: 'telephone', nullable: true })
  telephone: string;

  @Column({ name: 'email', nullable: true })
  email: string;

  @Column({ name: 'fax', nullable: true })
  fax: string;

  @Column({ name: 'rating', nullable: true })
  rating: string;

  @Column({ name: 'status', nullable: true })
  status: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'is_deleted', nullable: true })
  isDeleted: number;

  @Column({ name: 'id_user', nullable: true })
  idUser: string;

  @Column({ name: 'validasi', nullable: true })
  validasi: number;

  @Column({ name: 'pic', nullable: true })
  pic: string;

  @Column({ name: 'services', nullable: true })
  services: string;

  @Column({ name: 'country', nullable: true })
  country: string;

  @Column({ name: 'delivery_time', nullable: true })
  deliveryTime: number;

  @Column({ name: 'trem_payment', nullable: true })
  tremPayment: number;

  @Column({ name: 'is_vendor', nullable: true })
  isVendor: string;

  @Column({ name: 'is_manufacture', nullable: true })
  isManufacture: string;

  @Column({ name: 'is_repairer', nullable: true })
  isRepairer: string;

  @Column({ name: 'is_shipper', nullable: true })
  isShipper: string;

  @Column({ name: 'is_workshop', nullable: true })
  isWorkshop: string;

  @Column({ name: 'id_mcurrency', nullable: true })
  idMcurrency: string;

  @Column({ name: 'old_id', nullable: true })
  oldId: string;

  @Column({ name: 'column1', nullable: true })
  column1: string;
}
