import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_tppr', schema: 'new_bpt' })
export class NewBptOnlTppr {
  @Column({ name: 'campur' })
  campur: string;

  @Column({ name: 'dewasa' })
  dewasa: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_tppr' })
  idOnlTppr: number;

  @Column({ name: 'jenis_ternak' })
  jenisTernak: string;

  @Column({ name: 'jumlah_modal' })
  jumlahModal: number;

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

  @Column({ name: 'strain' })
  strain: string;
}
