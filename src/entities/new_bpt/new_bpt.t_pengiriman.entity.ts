import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_pengiriman', schema: 'new_bpt' })
export class NewBptTPengiriman {
  @Column({ name: 'alamat', nullable: true })
  alamat: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'id_izin', nullable: true })
  idIzin: number;

  @Column({ name: 'id_kabkot', nullable: true })
  idKabkot: string;

  @Column({ name: 'id_kec', nullable: true })
  idKec: string;

  @Column({ name: 'id_kel', nullable: true })
  idKel: string;

  @PrimaryColumn({ name: 'id_t_pengiriman' })
  idTPengiriman: number;

  @Column({ name: 'kodepos' })
  kodepos: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
