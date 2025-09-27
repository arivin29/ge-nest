import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_tppr', schema: 'new_bpt' })
export class NewBptSkIzinTppr {
  @Column({ name: 'campur' })
  campur: string;

  @Column({ name: 'daftar_ulang' })
  daftarUlang: string;

  @Column({ name: 'dewasa' })
  dewasa: string;

  @Column({ name: 'hasil_survey_lapangan' })
  hasilSurveyLapangan: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_tppr' })
  idSkIzinTppr: number;

  @Column({ name: 'jenis_ternak' })
  jenisTernak: string;

  @Column({ name: 'jml_ternak' })
  jmlTernak: string;

  @Column({ name: 'jumlah_modal' })
  jumlahModal: string;

  @Column({ name: 'jumlah_produksi' })
  jumlahProduksi: string;

  @Column({ name: 'luas_kandang' })
  luasKandang: string;

  @Column({ name: 'luas_lahan' })
  luasLahan: string;

  @Column({ name: 'macam_produksi' })
  macamProduksi: string;

  @Column({ name: 'milik_kandang' })
  milikKandang: string;

  @Column({ name: 'milik_lahan' })
  milikLahan: string;

  @Column({ name: 'nama_usaha' })
  namaUsaha: string;

  @Column({ name: 'straint' })
  straint: string;

  @Column({ name: 'tgl' })
  tgl: string;
}
