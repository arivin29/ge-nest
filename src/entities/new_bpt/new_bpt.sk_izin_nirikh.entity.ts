import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_nirikh', schema: 'new_bpt' })
export class NewBptSkIzinNirikh {
  @Column({ name: 'akte_pendirian' })
  aktePendirian: string;

  @Column({ name: 'apip' })
  apip: string;

  @Column({ name: 'dr_hewan' })
  drHewan: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_nirikh' })
  idSkIzinNirikh: number;

  @Column({ name: 'imb' })
  imb: string;

  @Column({ name: 'ippt' })
  ippt: string;

  @Column({ name: 'izin_lingkungan' })
  izinLingkungan: string;

  @Column({ name: 'jenis' })
  jenis: string;

  @Column({ name: 'jenis_usaha' })
  jenisUsaha: string;

  @Column({ name: 'kapasitas' })
  kapasitas: string;

  @Column({ name: 'keputusan' })
  keputusan: string;

  @Column({ name: 'keputusan_menteri' })
  keputusanMenteri: string;

  @Column({ name: 'luas_kandang' })
  luasKandang: string;

  @Column({ name: 'memperhatikan' })
  memperhatikan: string;

  @Column({ name: 'nomor' })
  nomor: string;

  @Column({ name: 'nos' })
  nos: string;

  @Column({ name: 'peninjau' })
  peninjau: string;

  @Column({ name: 'perihals' })
  perihals: string;

  @Column({ name: 'sarana' })
  sarana: string;

  @Column({ name: 'siup' })
  siup: string;

  @Column({ name: 'skdu' })
  skdu: string;

  @Column({ name: 'tdp' })
  tdp: string;

  @Column({ name: 'tgl' })
  tgl: string;

  @Column({ name: 'tgls' })
  tgls: string;
}
