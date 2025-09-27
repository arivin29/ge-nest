import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_perusahaan', schema: 'new_bpt' })
export class NewBptTPerusahaan {
  @Column({ name: 'aktif' })
  aktif: boolean;

  @Column({ name: 'alamat', nullable: true })
  alamat: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'desa' })
  desa: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'fax' })
  fax: string;

  @Column({ name: 'id_kabkot', nullable: true })
  idKabkot: string;

  @Column({ name: 'id_kec', nullable: true })
  idKec: string;

  @Column({ name: 'id_kel', nullable: true })
  idKel: string;

  @PrimaryColumn({ name: 'id_perusahaan' })
  idPerusahaan: number;

  @Column({ name: 'id_perusahaan_badan_usaha' })
  idPerusahaanBadanUsaha: number;

  @Column({ name: 'id_perusahaan_bidang_usaha' })
  idPerusahaanBidangUsaha: number;

  @Column({ name: 'id_perusahaan_sumber_modal' })
  idPerusahaanSumberModal: number;

  @Column({ name: 'id_prov', nullable: true })
  idProv: string;

  @Column({ name: 'id_user' })
  idUser: number;

  @Column({ name: 'investasi' })
  investasi: number;

  @Column({ name: 'kode_pos' })
  kodePos: number;

  @Column({ name: 'merk_usaha', nullable: true })
  merkUsaha: string;

  @Column({ name: 'nama', nullable: true })
  nama: string;

  @Column({ name: 'npp', nullable: true })
  npp: string;

  @Column({ name: 'npwp' })
  npwp: string;

  @Column({ name: 'pimpinan', nullable: true })
  pimpinan: string;

  @Column({ name: 'profile', nullable: true })
  profile: string;

  @Column({ name: 'rt', nullable: true })
  rt: string;

  @Column({ name: 'rw', nullable: true })
  rw: string;

  @Column({ name: 'skala' })
  skala: string;

  @Column({ name: 'source' })
  source: string;

  @Column({ name: 'status' })
  status: string;

  @Column({ name: 'telepon' })
  telepon: string;

  @Column({ name: 'tgl_input', nullable: true })
  tglInput: string;

  @Column({ name: 'tkapria' })
  tkapria: number;

  @Column({ name: 'tkawanita' })
  tkawanita: number;

  @Column({ name: 'tkipria' })
  tkipria: number;

  @Column({ name: 'tkiwanita' })
  tkiwanita: number;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'web' })
  web: string;
}
