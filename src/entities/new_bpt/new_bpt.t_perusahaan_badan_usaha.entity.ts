import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_perusahaan_badan_usaha', schema: 'new_bpt' })
export class NewBptTPerusahaanBadanUsaha {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @PrimaryColumn({ name: 'id_perusahaan_badan_usaha' })
  idPerusahaanBadanUsaha: number;

  @Column({ name: 'kode' })
  kode: string;

  @Column({ name: 'nama' })
  nama: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
