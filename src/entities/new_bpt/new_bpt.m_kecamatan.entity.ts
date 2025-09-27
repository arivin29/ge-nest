import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'm_kecamatan', schema: 'new_bpt' })
export class NewBptMKecamatan {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'id_kabkot' })
  idKabkot: string;

  @PrimaryColumn({ name: 'id_kec' })
  idKec: string;

  @Column({ name: 'nama_kec' })
  namaKec: string;

  @Column({ name: 'status', nullable: true })
  status: boolean;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;
}
