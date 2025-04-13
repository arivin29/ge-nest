import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'company_config', schema: 'erp_pelanggan' })
export class PelangganCompanyConfig {
  @PrimaryColumn({ name: 'id_company_config' })
  idCompanyConfig: string;

  @Column({ name: 'versi_erp' })
  versiErp: string;

  @Column({ name: 'nama_perusahaan' })
  namaPerusahaan: string;

  @Column({ name: 'logo_url' })
  logoUrl: string;

  @Column({ name: 'alamat' })
  alamat: string;

  @Column({ name: 'kontak' })
  kontak: string;

  @Column({ name: 'catatan' })
  catatan: string;

  @Column({ name: 'created_at' })
  createdAt: string;

  @Column({ name: 'updated_at' })
  updatedAt: string;
}
