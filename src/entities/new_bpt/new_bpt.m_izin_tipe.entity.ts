import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'm_izin_tipe', schema: 'new_bpt' })
export class NewBptMIzinTipe {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @PrimaryColumn({ name: 'id_izin_tipe' })
  idIzinTipe: number;

  @Column({ name: 'keterangan' })
  keterangan: string;

  @Column({ name: 'ktui', nullable: true })
  ktui: string;

  @Column({ name: 'ktui2', nullable: true })
  ktui2: string;

  @Column({ name: 'nama' })
  nama: string;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;
}
