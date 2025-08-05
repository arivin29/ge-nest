import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'site', schema: 'erp_amims' })
export class AmimsSite {
  @Column({ name: 'address', nullable: true })
  address: string;

  @Column({ name: 'city', nullable: true })
  city: string;

  @Column({ name: 'code_site', nullable: true })
  codeSite: string;

  @Column({ name: 'contactname', nullable: true })
  contactname: string;

  @Column({ name: 'country', nullable: true })
  country: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'emailaddress', nullable: true })
  emailaddress: string;

  @Column({ name: 'fax', nullable: true })
  fax: string;

  @Column({ name: 'id_new_site', nullable: true })
  idNewSite: string;

  @PrimaryColumn({ name: 'id_site' })
  idSite: string;

  @Column({ name: 'id_user', nullable: true })
  idUser: string;

  @Column({ name: 'is_deleted', nullable: true })
  isDeleted: number;

  @Column({ name: 'is_main', nullable: true })
  isMain: number;

  @Column({ name: 'is_store', nullable: true })
  isStore: string;

  @Column({ name: 'logo_site', nullable: true })
  logoSite: string;

  @Column({ name: 'mobile', nullable: true })
  mobile: string;

  @Column({ name: 'old_id', nullable: true })
  oldId: string;

  @Column({ name: 'parent_site', nullable: true })
  parentSite: number;

  @Column({ name: 'site', nullable: true })
  site: string;

  @Column({ name: 'status_site', nullable: true })
  statusSite: number;

  @Column({ name: 'telephone', nullable: true })
  telephone: string;

  @Column({ name: 'type_site', nullable: true })
  typeSite: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'validation', nullable: true })
  validation: number;
}
