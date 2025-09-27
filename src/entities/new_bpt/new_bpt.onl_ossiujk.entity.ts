import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ossiujk', schema: 'new_bpt' })
export class NewBptOnlOssiujk {
  @Column({ name: 'bidang_pekerjaan' })
  bidangPekerjaan: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ossiujk' })
  idOnlOssiujk: number;

  @Column({ name: 'kegiatan_usaha' })
  kegiatanUsaha: string;

  @Column({ name: 'klasifikasi' })
  klasifikasi: string;

  @Column({ name: 'kualifikasi' })
  kualifikasi: string;

  @Column({ name: 'nama_pekerjaan' })
  namaPekerjaan: string;

  @Column({ name: 'nilai_paket_pekerjaan' })
  nilaiPaketPekerjaan: number;

  @Column({ name: 'nomor_nib' })
  nomorNib: string;

  @Column({ name: 'nomor_sbu' })
  nomorSbu: string;

  @Column({ name: 'status_perusahaan' })
  statusPerusahaan: string;

  @Column({ name: 'sub_bidang_pekerjaan' })
  subBidangPekerjaan: string;

  @Column({ name: 'tahun' })
  tahun: string;
}
