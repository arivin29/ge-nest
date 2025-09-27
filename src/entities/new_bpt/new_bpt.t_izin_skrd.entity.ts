import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_izin_skrd', schema: 'new_bpt' })
export class NewBptTIzinSkrd {
  @Column({ name: 'bln_tunggakan', nullable: true })
  blnTunggakan: string;

  @Column({ name: 'created_at' })
  createdAt: string;

  @Column({ name: 'file', nullable: true })
  file: string;

  @Column({ name: 'file_denda', nullable: true })
  fileDenda: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @Column({ name: 'id_izin_jenis', nullable: true })
  idIzinJenis: number;

  @PrimaryColumn({ name: 'id_t_izin_skrd' })
  idTIzinSkrd: number;

  @Column({ name: 'id_user', nullable: true })
  idUser: number;

  @Column({ name: 'jenis_imbg' })
  jenisImbg: boolean;

  @Column({ name: 'no_urut' })
  noUrut: number;

  @Column({ name: 'peruntukan_bangunan', nullable: true })
  peruntukanBangunan: string;

  @Column({ name: 'rumus', nullable: true })
  rumus: string;

  @Column({ name: 'ttd', nullable: true })
  ttd: boolean;

  @Column({ name: 'ttd_denda', nullable: true })
  ttdDenda: boolean;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
