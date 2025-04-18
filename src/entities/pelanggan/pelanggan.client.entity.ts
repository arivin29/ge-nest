import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'client', schema: 'erp_pelanggan' })
export class PelangganClient {
  @PrimaryColumn({ name: 'id_client' })
  idClient: string;

  @Column({ name: 'kode_client', nullable: true })
  kodeClient: string;

  @Column({ name: 'jenis_client', nullable: true })
  jenisClient: string;

  @Column({ name: 'nama_resmi' })
  namaResmi: string;

  @Column({ name: 'nama_familiar', nullable: true })
  namaFamiliar: string;

  @Column({ name: 'npwp', nullable: true })
  npwp: string;

  @Column({ name: 'email_perusahaan', nullable: true })
  emailPerusahaan: string;

  @Column({ name: 'telepon', nullable: true })
  telepon: string;

  @Column({ name: 'website', nullable: true })
  website: string;

  @Column({ name: 'alamat', nullable: true })
  alamat: string;

  @Column({ name: 'kota', nullable: true })
  kota: string;

  @Column({ name: 'provinsi', nullable: true })
  provinsi: string;

  @Column({ name: 'kode_pos', nullable: true })
  kodePos: string;

  @Column({ name: 'primary_pic', nullable: true })
  primaryPic: string;

  @Column({ name: 'logo_url', nullable: true })
  logoUrl: string;

  @Column({ name: 'catatan', nullable: true })
  catatan: string;

  @Column({ name: 'is_aktif', nullable: true })
  isAktif: boolean;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
