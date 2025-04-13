import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'kantor', schema: 'erp_pelanggan' })
export class PelangganKantor {
  @PrimaryColumn({ name: 'id_kantor' })
  idKantor: string;

  @Column({ name: 'nama_kantor' })
  namaKantor: string;

  @Column({ name: 'kode_kantor' })
  kodeKantor: string;

  @Column({ name: 'alamat' })
  alamat: string;

  @Column({ name: 'kota' })
  kota: string;

  @Column({ name: 'provinsi' })
  provinsi: string;

  @Column({ name: 'is_pusat' })
  isPusat: boolean;

  @Column({ name: 'is_aktif' })
  isAktif: boolean;

  @Column({ name: 'catatan' })
  catatan: string;

  @Column({ name: 'created_at' })
  createdAt: string;

  @Column({ name: 'updated_at' })
  updatedAt: string;
}
