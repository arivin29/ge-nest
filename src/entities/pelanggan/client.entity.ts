import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'client', schema: 'erp_pelanggan' })
export class Client {
  @PrimaryColumn({ name: 'id_client' })
  idClient: string;

  @Column({ name: 'kode_client' })
  kodeClient: string;

  @Column({ name: 'jenis_client' })
  jenisClient: string;

  @Column({ name: 'nama_resmi' })
  namaResmi: string;

  @Column({ name: 'nama_familiar' })
  namaFamiliar: string;

  @Column({ name: 'npwp' })
  npwp: string;

  @Column({ name: 'email_perusahaan' })
  emailPerusahaan: string;

  @Column({ name: 'telepon' })
  telepon: string;

  @Column({ name: 'website' })
  website: string;

  @Column({ name: 'alamat' })
  alamat: string;

  @Column({ name: 'kota' })
  kota: string;

  @Column({ name: 'provinsi' })
  provinsi: string;

  @Column({ name: 'kode_pos' })
  kodePos: string;

  @Column({ name: 'primary_pic' })
  primaryPic: string;

  @Column({ name: 'logo_url' })
  logoUrl: string;

  @Column({ name: 'catatan' })
  catatan: string;

  @Column({ name: 'is_aktif' })
  isAktif: boolean;

  @Column({ name: 'created_at' })
  createdAt: string;

  @Column({ name: 'updated_at' })
  updatedAt: string;
}
