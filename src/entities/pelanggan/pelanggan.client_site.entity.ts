import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'client_site', schema: 'erp_pelanggan' })
export class PelangganClientSite {
  @Column({ name: 'alamat', nullable: true })
  alamat: string;

  @Column({ name: 'catatan', nullable: true })
  catatan: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'id_client' })
  idClient: string;

  @PrimaryColumn({ name: 'id_client_site' })
  idClientSite: string;

  @Column({ name: 'id_kantor', nullable: true })
  idKantor: string;

  @Column({ name: 'is_aktif', nullable: true })
  isAktif: boolean;

  @Column({ name: 'kategori_site', nullable: true })
  kategoriSite: string;

  @Column({ name: 'kode_pos', nullable: true })
  kodePos: string;

  @Column({ name: 'kota', nullable: true })
  kota: string;

  @Column({ name: 'latitude', nullable: true })
  latitude: number;

  @Column({ name: 'longitude', nullable: true })
  longitude: number;

  @Column({ name: 'nama_site', nullable: true })
  namaSite: string;

  @Column({ name: 'provinsi', nullable: true })
  provinsi: string;

  @Column({ name: 'tag_site', nullable: true })
  tagSite: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
