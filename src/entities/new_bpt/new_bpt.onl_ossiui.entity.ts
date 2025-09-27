import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ossiui', schema: 'new_bpt' })
export class NewBptOnlOssiui {
  @Column({ name: 'id_izin', nullable: true })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ossiui' })
  idOnlOssiui: number;

  @Column({ name: 'investasi', nullable: true })
  investasi: number;

  @Column({ name: 'nama_kbli', nullable: true })
  namaKbli: string;

  @Column({ name: 'nib', nullable: true })
  nib: string;

  @Column({ name: 'nomor_kbli', nullable: true })
  nomorKbli: string;

  @Column({ name: 'status_bangunan', nullable: true })
  statusBangunan: string;

  @Column({ name: 'tka', nullable: true })
  tka: number;

  @Column({ name: 'tki', nullable: true })
  tki: number;
}
