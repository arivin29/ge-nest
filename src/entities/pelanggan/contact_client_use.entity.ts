import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'contact_client_use', schema: 'erp_pelanggan' })
export class ContactClientUse {
  @PrimaryColumn({ name: 'id_contact_client_use' })
  idContactClientUse: string;

  @Column({ name: 'id_client_contact' })
  idClientContact: string;

  @Column({ name: 'from_module' })
  fromModule: string;

  @Column({ name: 'from_module_id' })
  fromModuleId: string;

  @Column({ name: 'peran' })
  peran: string;

  @Column({ name: 'is_primary' })
  isPrimary: boolean;

  @Column({ name: 'catatan' })
  catatan: string;

  @Column({ name: 'created_at' })
  createdAt: string;

  @Column({ name: 'updated_at' })
  updatedAt: string;
}
