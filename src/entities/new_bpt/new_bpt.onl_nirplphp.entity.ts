import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_nirplphp', schema: 'new_bpt' })
export class NewBptOnlNirplphp {
  @Column({ name: 'alat_transport' })
  alatTransport: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_nirplphp' })
  idOnlNirplphp: number;

  @Column({ name: 'nama' })
  nama: string;

  @Column({ name: 'nos' })
  nos: string;

  @Column({ name: 'perihals' })
  perihals: string;

  @Column({ name: 'tanggal' })
  tanggal: string;

  @Column({ name: 'tgls' })
  tgls: string;

  @Column({ name: 'tujuan' })
  tujuan: string;
}
