import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'm_izin_jenis', schema: 'new_bpt' })
export class NewBptMIzinJenis {
  @Column({ name: 'bidang' })
  bidang: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'digital_sign' })
  digitalSign: boolean;

  @Column({ name: 'files', nullable: true })
  files: string;

  @Column({ name: 'hk' })
  hk: number;

  @PrimaryColumn({ name: 'id_izin_jenis' })
  idIzinJenis: number;

  @Column({ name: 'keterangan', nullable: true })
  keterangan: string;

  @Column({ name: 'kode', nullable: true })
  kode: string;

  @Column({ name: 'log', nullable: true })
  log: string;

  @Column({ name: 'nama', nullable: true })
  nama: string;

  @Column({ name: 'no_izin', nullable: true })
  noIzin: string;

  @Column({ name: 'no_urut', nullable: true })
  noUrut: string;

  @Column({ name: 'online' })
  online: boolean;

  @Column({ name: 'penomoran_sk', nullable: true })
  penomoranSk: boolean;

  @Column({ name: 'retribusi', nullable: true })
  retribusi: string;

  @Column({ name: 'status', nullable: true })
  status: string;

  @Column({ name: 'survey', nullable: true })
  survey: number;

  @Column({ name: 'tgl_daftar_izin', nullable: true })
  tglDaftarIzin: string;

  @Column({ name: 'tgl_edit', nullable: true })
  tglEdit: string;

  @Column({ name: 'tim_teknis' })
  timTeknis: boolean;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;

  @Column({ name: 'ver', nullable: true })
  ver: boolean;
}
