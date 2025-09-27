import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'dashboard', schema: 'new_bpt' })
export class NewBptDashboard {
  @Column({ name: 'email', nullable: true })
  email: boolean;

  @PrimaryColumn({ name: 'id_dashboard' })
  idDashboard: number;

  @Column({ name: 'izin_masuk', nullable: true })
  izinMasuk: number;

  @Column({ name: 'izin_proses', nullable: true })
  izinProses: number;

  @Column({ name: 'izin_terbit', nullable: true })
  izinTerbit: number;

  @Column({ name: 'izin_tolak', nullable: true })
  izinTolak: number;

  @Column({ name: 'nik', nullable: true })
  nik: boolean;

  @Column({ name: 'npp', nullable: true })
  npp: boolean;

  @Column({ name: 'npwp', nullable: true })
  npwp: boolean;

  @Column({ name: 'oss', nullable: true })
  oss: boolean;

  @Column({ name: 'posisi_izin_arsip', nullable: true })
  posisiIzinArsip: number;

  @Column({ name: 'posisi_izin_bo', nullable: true })
  posisiIzinBo: number;

  @Column({ name: 'posisi_izin_fo', nullable: true })
  posisiIzinFo: number;

  @Column({ name: 'posisi_izin_ikp', nullable: true })
  posisiIzinIkp: number;

  @Column({ name: 'posisi_izin_kabid', nullable: true })
  posisiIzinKabid: number;

  @Column({ name: 'posisi_izin_kadis', nullable: true })
  posisiIzinKadis: number;

  @Column({ name: 'posisi_izin_kasi', nullable: true })
  posisiIzinKasi: number;

  @Column({ name: 'posisi_izin_menunggu_ttd', nullable: true })
  posisiIzinMenungguTtd: number;

  @Column({ name: 'posisi_izin_menunggu_ttd_skrd', nullable: true })
  posisiIzinMenungguTtdSkrd: number;

  @Column({ name: 'posisi_izin_penyerahan', nullable: true })
  posisiIzinPenyerahan: number;

  @Column({ name: 'posisi_izin_sekdis', nullable: true })
  posisiIzinSekdis: number;

  @Column({ name: 'posisi_izin_skrd_diambil', nullable: true })
  posisiIzinSkrdDiambil: number;

  @Column({ name: 'posisi_izin_skrd_dibayar', nullable: true })
  posisiIzinSkrdDibayar: number;

  @Column({ name: 'posisi_izin_skrd_terbit', nullable: true })
  posisiIzinSkrdTerbit: number;

  @Column({ name: 'posisi_izin_ver', nullable: true })
  posisiIzinVer: number;

  @Column({ name: 'realisasi_damija', nullable: true })
  realisasiDamija: number;

  @Column({ name: 'realisasi_imbg', nullable: true })
  realisasiImbg: number;

  @Column({ name: 'sms', nullable: true })
  sms: boolean;

  @Column({ name: 'tahun', nullable: true })
  tahun: string;

  @Column({ name: 'target_damija', nullable: true })
  targetDamija: number;

  @Column({ name: 'target_imbg', nullable: true })
  targetImbg: number;

  @Column({ name: 'tunggakan_damija', nullable: true })
  tunggakanDamija: number;

  @Column({ name: 'tunggakan_imbg', nullable: true })
  tunggakanImbg: number;
}
