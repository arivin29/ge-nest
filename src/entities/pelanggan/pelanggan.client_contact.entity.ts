import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'client_contact', schema: 'erp_pelanggan' })
export class PelangganClientContact {
  @Column({ name: 'catatan', nullable: true })
  catatan: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'divisi', nullable: true })
  divisi: string;

  @Column({ name: 'email', nullable: true })
  email: string;

  @Column({ name: 'id_client' })
  idClient: string;

  @PrimaryColumn({ name: 'id_client_contact' })
  idClientContact: string;

  @Column({ name: 'is_primary', nullable: true })
  isPrimary: boolean;

  @Column({ name: 'jabatan', nullable: true })
  jabatan: string;

  @Column({ name: 'jenis_contact', nullable: true })
  jenisContact: string;

  @Column({ name: 'nama_contact', nullable: true })
  namaContact: string;

  @Column({ name: 'telepon', nullable: true })
  telepon: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
