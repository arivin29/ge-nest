import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'laporan_kecamatan', schema: 'new_bpt' })
export class NewBptLaporanKecamatan {
  @Column({ name: 'bulan', nullable: true })
  bulan: string;

  @Column({ name: 'id_izin_jenis_kecamatan' })
  idIzinJenisKecamatan: number;

  @PrimaryColumn({ name: 'id_laporan_kecamatan' })
  idLaporanKecamatan: number;

  @Column({ name: 'id_user_kecamatan' })
  idUserKecamatan: number;

  @Column({ name: 'izin_masuk' })
  izinMasuk: number;

  @Column({ name: 'izin_proses' })
  izinProses: number;

  @Column({ name: 'izin_terbit' })
  izinTerbit: number;

  @Column({ name: 'izin_tolak' })
  izinTolak: number;

  @Column({ name: 'keterangan' })
  keterangan: string;

  @Column({ name: 'nama_file' })
  namaFile: string;

  @Column({ name: 'nama_laporan' })
  namaLaporan: string;

  @Column({ name: 'tanggal', default: () => 'CURRENT_TIMESTAMP' })
  tanggal: string;
}
