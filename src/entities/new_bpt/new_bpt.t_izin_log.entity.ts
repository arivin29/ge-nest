import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_izin_log', schema: 'new_bpt' })
export class NewBptTIzinLog {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'id_izin', nullable: true })
  idIzin: number;

  @PrimaryColumn({ name: 'id_izin_log' })
  idIzinLog: number;

  @Column({ name: 'id_izin_posisi', nullable: true })
  idIzinPosisi: number;

  @Column({ name: 'id_user' })
  idUser: number;

  @Column({ name: 'keterangan' })
  keterangan: string;

  @Column({ name: 'tanggal', default: () => 'CURRENT_TIMESTAMP' })
  tanggal: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
