import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_tduprhu', schema: 'new_bpt' })
export class NewBptSkIzinTduprhu {
  @Column({ name: 'fasilitas_umum' })
  fasilitasUmum: string;

  @Column({ name: 'fasilitas_utama' })
  fasilitasUtama: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_tduprhu' })
  idSkIzinTduprhu: number;

  @Column({ name: 'imb' })
  imb: string;

  @Column({ name: 'ippt' })
  ippt: string;

  @Column({ name: 'jenis_usaha' })
  jenisUsaha: string;

  @Column({ name: 'nama_usaha' })
  namaUsaha: string;

  @Column({ name: 'no_5' })
  no_5: string;

  @Column({ name: 'no_6' })
  no_6: string;

  @Column({ name: 'no_akta_pendirian' })
  noAktaPendirian: string;

  @Column({ name: 'nomor_tgl_kajian_teknis' })
  nomorTglKajianTeknis: string;

  @Column({ name: 'nomor_tgl_site_plan' })
  nomorTglSitePlan: string;

  @Column({ name: 'perizinan' })
  perizinan: string;

  @Column({ name: 'subjenis_usaha' })
  subjenisUsaha: string;

  @Column({ name: 'tlp' })
  tlp: string;

  @Column({ name: 'ukl' })
  ukl: string;
}
