import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_nirlhtp', schema: 'new_bpt' })
export class NewBptSkIzinNirlhtp {
  @Column({ name: 'alat_transport' })
  alatTransport: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_nirlhtp' })
  idSkIzinNirlhtp: number;

  @Column({ name: 'Nama' })
  Nama: string;

  @Column({ name: 'nos' })
  nos: string;

  @Column({ name: 'Pelabuhan' })
  Pelabuhan: string;

  @Column({ name: 'Perihals' })
  Perihals: string;

  @Column({ name: 'Tanggal' })
  Tanggal: string;

  @Column({ name: 'tgls' })
  tgls: string;

  @Column({ name: 'Tujuan' })
  Tujuan: string;
}
