import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'm_izin_jenis_nakes', schema: 'new_bpt' })
export class NewBptMIzinJenisNakes {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @PrimaryColumn({ name: 'id_izin_jenis_nakes' })
  idIzinJenisNakes: number;

  @Column({ name: 'kode', nullable: true })
  kode: string;

  @Column({ name: 'nama', nullable: true })
  nama: string;

  @Column({ name: 'status', nullable: true })
  status: number;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;

  @Column({ name: 'ver', nullable: true })
  ver: string;
}
