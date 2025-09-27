import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'm_izin_syarat_baru', schema: 'new_bpt' })
export class NewBptMIzinSyaratBaru {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @PrimaryColumn({ name: 'id_izin_syarat_baru' })
  idIzinSyaratBaru: number;

  @Column({ name: 'id_m_izin_jenis_tipe_baru' })
  idMIzinJenisTipeBaru: number;

  @Column({ name: 'id_m_syarat_baru' })
  idMSyaratBaru: number;

  @Column({ name: 'no_urut', nullable: true })
  noUrut: boolean;

  @Column({ name: 'status' })
  status: boolean;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;
}
