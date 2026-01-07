import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'pur_vendor_contact', schema: 'erp_amims' })
export class AmimsPurVendorContact {
  @PrimaryColumn({ name: 'id_pur_vendor_contact' })
  idPurVendorContact: string;

  @Column({ name: 'id_pur_vendor', nullable: true })
  idPurVendor: string;

  @Column({ name: 'address', nullable: true })
  address: string;

  @Column({ name: 'city', nullable: true })
  city: string;

  @Column({ name: 'pic', nullable: true })
  pic: string;

  @Column({ name: 'country', nullable: true })
  country: string;

  @Column({ name: 'fax', nullable: true })
  fax: string;

  @Column({ name: 'phone', nullable: true })
  phone: string;

  @Column({ name: 'postcode', nullable: true })
  postcode: string;

  @Column({ name: 'state', nullable: true })
  state: string;

  @Column({ name: 'line_phone', nullable: true })
  linePhone: string;

  @Column({ name: 'email', nullable: true })
  email: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'old_id', nullable: true })
  oldId: string;
}
