import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'm_izin_jenis_tipe_baru', schema: 'new_bpt' })
export class NewBptMIzinJenisTipeBaru {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'id_izin_jenis' })
  idIzinJenis: number;

  @PrimaryColumn({ name: 'id_izin_jenis_tipe_baru' })
  idIzinJenisTipeBaru: number;

  @Column({ name: 'id_izin_tipe' })
  idIzinTipe: number;

  @Column({ name: 'no_urut', nullable: true })
  noUrut: boolean;

  @Column({ name: 'status', nullable: true })
  status: boolean;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;
}
