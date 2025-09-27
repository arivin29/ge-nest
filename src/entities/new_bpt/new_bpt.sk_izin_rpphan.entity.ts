import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_rpphan', schema: 'new_bpt' })
export class NewBptSkIzinRpphan {
  @Column({ name: 'alat_transport' })
  alatTransport: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_rpphan' })
  idSkIzinRpphan: number;

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
