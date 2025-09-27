import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_sipdh', schema: 'new_bpt' })
export class NewBptSkIzinSipdh {
  @Column({ name: 'berlaku_str', nullable: true })
  berlakuStr: string;

  @Column({ name: 'bulan_romawi' })
  bulanRomawi: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_sipdh' })
  idSkIzinSipdh: number;

  @Column({ name: 'jml_praktek', nullable: true })
  jmlPraktek: number;

  @Column({ name: 'ket_alamat_praktek' })
  ketAlamatPraktek: string;

  @Column({ name: 'nomor_str' })
  nomorStr: string;

  @Column({ name: 'norek_dinas' })
  norekDinas: string;

  @Column({ name: 'norekom_pdhi' })
  norekomPdhi: string;

  @Column({ name: 'tempat_praktik' })
  tempatPraktik: string;

  @Column({ name: 'ttl' })
  ttl: string;
}
