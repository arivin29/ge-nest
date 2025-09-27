import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_nirmphn', schema: 'new_bpt' })
export class NewBptOnlNirmphn {
  @Column({ name: 'alat_transport' })
  alatTransport: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_nirmphn' })
  idOnlNirmphn: number;

  @Column({ name: 'negara' })
  negara: string;

  @Column({ name: 'nos' })
  nos: string;

  @Column({ name: 'pelabuhan' })
  pelabuhan: string;

  @Column({ name: 'perihals' })
  perihals: string;

  @Column({ name: 'tanggal_akhir' })
  tanggalAkhir: string;

  @Column({ name: 'tanggal_awal' })
  tanggalAwal: string;

  @Column({ name: 'tgls' })
  tgls: string;

  @Column({ name: 'tujuan' })
  tujuan: string;
}
