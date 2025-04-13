import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'client_site', schema: 'erp_pelanggan' })
export class ClientSite {
  @PrimaryColumn({ name: 'id_client_site' })
  idClientSite: string;

  @Column({ name: 'id_client' })
  idClient: string;

  @Column({ name: 'nama_site' })
  namaSite: string;

  @Column({ name: 'alamat' })
  alamat: string;

  @Column({ name: 'kota' })
  kota: string;

  @Column({ name: 'provinsi' })
  provinsi: string;

  @Column({ name: 'kode_pos' })
  kodePos: string;

  @Column({ name: 'kategori_site' })
  kategoriSite: string;

  @Column({ name: 'tag_site' })
  tagSite: string;

  @Column({ name: 'latitude' })
  latitude: number;

  @Column({ name: 'longitude' })
  longitude: number;

  @Column({ name: 'is_aktif' })
  isAktif: boolean;

  @Column({ name: 'id_kantor' })
  idKantor: string;

  @Column({ name: 'catatan' })
  catatan: string;

  @Column({ name: 'created_at' })
  createdAt: string;

  @Column({ name: 'updated_at' })
  updatedAt: string;
}
