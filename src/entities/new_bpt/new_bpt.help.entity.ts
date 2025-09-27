import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'help', schema: 'new_bpt' })
export class NewBptHelp {
  @Column({ name: 'file', nullable: true })
  file: string;

  @PrimaryColumn({ name: 'id_help' })
  idHelp: number;

  @Column({ name: 'id_izin', nullable: true })
  idIzin: number;

  @Column({ name: 'id_user', nullable: true })
  idUser: number;

  @Column({ name: 'masalah', nullable: true })
  masalah: string;

  @Column({ name: 'petugas', nullable: true })
  petugas: boolean;

  @Column({ name: 'status', nullable: true })
  status: boolean;

  @Column({ name: 'tanggal', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  tanggal: string;

  @Column({ name: 'tanggal_selesai', nullable: true })
  tanggalSelesai: string;

  @Column({ name: 'telp', nullable: true })
  telp: string;
}
