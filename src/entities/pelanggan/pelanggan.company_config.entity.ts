import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'company_config', schema: 'erp_pelanggan' })
export class PelangganCompanyConfig {
  @PrimaryColumn({ name: 'id_company_config' })
  idCompanyConfig: string;

  @Column({ name: 'versi_erp', nullable: true })
  versiErp: string;

  @Column({ name: 'nama_perusahaan', nullable: true })
  namaPerusahaan: string;

  @Column({ name: 'logo_url', nullable: true })
  logoUrl: string;

  @Column({ name: 'alamat', nullable: true })
  alamat: string;

  @Column({ name: 'kontak', nullable: true })
  kontak: string;

  @Column({ name: 'catatan', nullable: true })
  catatan: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
