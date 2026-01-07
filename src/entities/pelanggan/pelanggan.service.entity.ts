import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'service', schema: 'erp_pelanggan' })
export class PelangganService {
  @PrimaryColumn({ name: 'id_service' })
  idService: string;

  @Column({ name: 'kode_service', nullable: true })
  kodeService: string;

  @Column({ name: 'nama_service' })
  namaService: string;

  @Column({ name: 'deskripsi', nullable: true })
  deskripsi: string;

  @Column({ name: 'satuan', nullable: true })
  satuan: string;

  @Column({ name: 'harga_default', nullable: true })
  hargaDefault: number;

  @Column({ name: 'is_aktif', nullable: true })
  isAktif: boolean;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
