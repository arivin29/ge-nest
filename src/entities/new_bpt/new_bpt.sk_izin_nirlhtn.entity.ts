import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_nirlhtn', schema: 'new_bpt' })
export class NewBptSkIzinNirlhtn {
  @Column({ name: 'alat_transport' })
  alatTransport: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_nirlhtn' })
  idSkIzinNirlhtn: number;

  @Column({ name: 'Nama' })
  Nama: string;

  @Column({ name: 'Negara' })
  Negara: string;

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
