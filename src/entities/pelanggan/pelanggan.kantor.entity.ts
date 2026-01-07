import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'kantor', schema: 'erp_pelanggan' })
export class PelangganKantor {
  @PrimaryColumn({ name: 'id_kantor' })
  idKantor: string;

  @Column({ name: 'nama_kantor' })
  namaKantor: string;

  @Column({ name: 'kode_kantor', nullable: true })
  kodeKantor: string;

  @Column({ name: 'alamat', nullable: true })
  alamat: string;

  @Column({ name: 'kota', nullable: true })
  kota: string;

  @Column({ name: 'provinsi', nullable: true })
  provinsi: string;

  @Column({ name: 'is_pusat', nullable: true })
  isPusat: boolean;

  @Column({ name: 'is_aktif', nullable: true })
  isAktif: boolean;

  @Column({ name: 'catatan', nullable: true })
  catatan: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
