import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'service', schema: 'erp_pelanggan' })
export class Service {
  @PrimaryColumn({ name: 'id_service' })
  idService: string;

  @Column({ name: 'kode_service' })
  kodeService: string;

  @Column({ name: 'nama_service' })
  namaService: string;

  @Column({ name: 'deskripsi' })
  deskripsi: string;

  @Column({ name: 'satuan' })
  satuan: string;

  @Column({ name: 'harga_default' })
  hargaDefault: number;

  @Column({ name: 'is_aktif' })
  isAktif: boolean;

  @Column({ name: 'created_at' })
  createdAt: string;

  @Column({ name: 'updated_at' })
  updatedAt: string;
}
