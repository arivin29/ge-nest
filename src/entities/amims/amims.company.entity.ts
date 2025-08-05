import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'company', schema: 'erp_amims' })
export class AmimsCompany {
  @Column({ name: 'address1', nullable: true })
  address1: string;

  @Column({ name: 'address2', nullable: true })
  address2: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'email', nullable: true })
  email: string;

  @Column({ name: 'fax', nullable: true })
  fax: string;

  @Column({ name: 'has_id_user', nullable: true })
  hasIdUser: number;

  @PrimaryColumn({ name: 'id_company' })
  idCompany: string;

  @Column({ name: 'is_default', nullable: true })
  isDefault: number;

  @Column({ name: 'name_company', nullable: true })
  nameCompany: string;

  @Column({ name: 'phone', nullable: true })
  phone: string;

  @Column({ name: 'status_company', nullable: true })
  statusCompany: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'website', nullable: true })
  website: string;
}
