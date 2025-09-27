import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_nirdoc', schema: 'new_bpt' })
export class NewBptOnlNirdoc {
  @Column({ name: 'alamat' })
  alamat: string;

  @Column({ name: 'alat_transport' })
  alatTransport: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_nirdoc' })
  idOnlNirdoc: number;

  @Column({ name: 'jenis' })
  jenis: string;

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
}
