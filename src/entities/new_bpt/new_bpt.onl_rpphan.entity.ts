import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_rpphan', schema: 'new_bpt' })
export class NewBptOnlRpphan {
  @Column({ name: 'alat_transport' })
  alatTransport: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_rpphan' })
  idOnlRpphan: number;

  @Column({ name: 'negara' })
  negara: string;

  @Column({ name: 'pelabuhan' })
  pelabuhan: string;

  @Column({ name: 'tanggal_akhir' })
  tanggalAkhir: string;

  @Column({ name: 'tanggal_awal' })
  tanggalAwal: string;

  @Column({ name: 'tujuan' })
  tujuan: string;
}
