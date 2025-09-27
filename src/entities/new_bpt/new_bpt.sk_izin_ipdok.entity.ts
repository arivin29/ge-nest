import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ipdok', schema: 'new_bpt' })
export class NewBptSkIzinIpdok {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ipdok' })
  idSkIzinIpdok: number;

  @Column({ name: 'jdwl_prtk', nullable: true })
  jdwlPrtk: string;

  @Column({ name: 'jml_praktek', nullable: true })
  jmlPraktek: number;

  @Column({ name: 'keahlian', nullable: true })
  keahlian: string;

  @Column({ name: 'nama_sarana' })
  namaSarana: string;

  @Column({ name: 'no_sk_lama' })
  noSkLama: string;

  @Column({ name: 'nomor_str' })
  nomorStr: string;

  @Column({ name: 'norekom_pdgi' })
  norekomPdgi: string;

  @Column({ name: 'sip_pertama', nullable: true })
  sipPertama: string;

  @Column({ name: 'str_berlaku_sd' })
  strBerlakuSd: string;

  @Column({ name: 'str_terbaru', nullable: true })
  strTerbaru: string;

  @Column({ name: 'tgl_sk_lama' })
  tglSkLama: string;

  @Column({ name: 'untuk_praktek2', nullable: true })
  untukPraktek2: string;

  @Column({ name: 'untuk_praktik' })
  untukPraktik: string;
}
