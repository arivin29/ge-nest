import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'client_contact', schema: 'erp_pelanggan' })
export class ClientContact {
  @PrimaryColumn({ name: 'id_client_contact' })
  idClientContact: string;

  @Column({ name: 'id_client' })
  idClient: string;

  @Column({ name: 'nama_contact' })
  namaContact: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'telepon' })
  telepon: string;

  @Column({ name: 'jabatan' })
  jabatan: string;

  @Column({ name: 'divisi' })
  divisi: string;

  @Column({ name: 'jenis_contact' })
  jenisContact: any;

  @Column({ name: 'is_primary' })
  isPrimary: boolean;

  @Column({ name: 'catatan' })
  catatan: string;

  @Column({ name: 'created_at' })
  createdAt: string;

  @Column({ name: 'updated_at' })
  updatedAt: string;
}
