import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ossiui', schema: 'new_bpt' })
export class NewBptSkIzinOssiui {
  @Column({ name: 'id_izin_sk', nullable: true })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ossiui' })
  idSkIzinOssiui: number;

  @Column({ name: 'investasi', nullable: true })
  investasi: number;

  @Column({ name: 'klasifikasi', nullable: true })
  klasifikasi: boolean;

  @Column({ name: 'nama_kbli', nullable: true })
  namaKbli: string;

  @Column({ name: 'nib', nullable: true })
  nib: string;

  @Column({ name: 'no_bap' })
  noBap: string;

  @Column({ name: 'no_sk_lama' })
  noSkLama: string;

  @Column({ name: 'nomor_kbli', nullable: true })
  nomorKbli: string;

  @Column({ name: 'perihal', nullable: true })
  perihal: string;

  @Column({ name: 'status_bangunan', nullable: true })
  statusBangunan: string;

  @Column({ name: 'tgl_bap' })
  tglBap: string;

  @Column({ name: 'tgl_sk_lama', nullable: true })
  tglSkLama: string;

  @Column({ name: 'tka', nullable: true })
  tka: number;

  @Column({ name: 'tki', nullable: true })
  tki: number;
}
