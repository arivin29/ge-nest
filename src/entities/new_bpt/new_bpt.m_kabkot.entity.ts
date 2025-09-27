import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'm_kabkot', schema: 'new_bpt' })
export class NewBptMKabkot {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @PrimaryColumn({ name: 'id_kabkot' })
  idKabkot: string;

  @Column({ name: 'id_prov' })
  idProv: string;

  @Column({ name: 'nama_kabkot' })
  namaKabkot: string;

  @Column({ name: 'status', nullable: true })
  status: boolean;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;
}
