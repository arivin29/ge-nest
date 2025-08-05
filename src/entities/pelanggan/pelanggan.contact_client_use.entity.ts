import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'contact_client_use', schema: 'erp_pelanggan' })
export class PelangganContactClientUse {
  @Column({ name: 'catatan', nullable: true })
  catatan: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'from_module' })
  fromModule: string;

  @Column({ name: 'from_module_id' })
  fromModuleId: string;

  @Column({ name: 'from_module_object', nullable: true })
  fromModuleObject: string;

  @Column({ name: 'id_client_contact' })
  idClientContact: string;

  @PrimaryColumn({ name: 'id_contact_client_use' })
  idContactClientUse: string;

  @Column({ name: 'is_primary', nullable: true })
  isPrimary: boolean;

  @Column({ name: 'peran', nullable: true })
  peran: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
