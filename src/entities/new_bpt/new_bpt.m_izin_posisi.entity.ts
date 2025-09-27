import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'm_izin_posisi', schema: 'new_bpt' })
export class NewBptMIzinPosisi {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @PrimaryColumn({ name: 'id_izin_posisi' })
  idIzinPosisi: number;

  @Column({ name: 'keterangan' })
  keterangan: string;

  @Column({ name: 'nama' })
  nama: string;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;
}
