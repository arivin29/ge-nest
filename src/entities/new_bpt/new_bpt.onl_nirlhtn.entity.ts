import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_nirlhtn', schema: 'new_bpt' })
export class NewBptOnlNirlhtn {
  @Column({ name: 'alat_transport' })
  alatTransport: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_nirlhtn' })
  idOnlNirlhtn: number;

  @Column({ name: 'nama' })
  nama: string;

  @Column({ name: 'negara' })
  negara: string;

  @Column({ name: 'nos' })
  nos: string;

  @Column({ name: 'pelabuhan' })
  pelabuhan: string;

  @Column({ name: 'perihals' })
  perihals: string;

  @Column({ name: 'tanggal' })
  tanggal: string;

  @Column({ name: 'tgls' })
  tgls: string;

  @Column({ name: 'tujuan' })
  tujuan: string;
}
