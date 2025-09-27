import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'antrian', schema: 'new_bpt' })
export class NewBptAntrian {
  @PrimaryColumn({ name: 'id_antrian' })
  idAntrian: number;

  @Column({ name: 'id_izin_jenis', nullable: true })
  idIzinJenis: number;

  @Column({ name: 'id_sesi', nullable: true })
  idSesi: number;

  @Column({ name: 'id_tipe', nullable: true })
  idTipe: boolean;

  @Column({ name: 'id_user', nullable: true })
  idUser: number;

  @Column({ name: 'jenis_layanan', nullable: true })
  jenisLayanan: boolean;

  @Column({ name: 'nama', nullable: true })
  nama: string;

  @Column({ name: 'nik', nullable: true })
  nik: string;

  @Column({ name: 'nomor_telp', nullable: true })
  nomorTelp: string;

  @Column({ name: 'status', nullable: true })
  status: boolean;

  @Column({ name: 'tanggal', nullable: true })
  tanggal: string;

  @Column({ name: 'token', nullable: true })
  token: string;

  @Column({ name: 'token_time', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  tokenTime: string;
}
