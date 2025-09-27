import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_sipb', schema: 'new_bpt' })
export class NewBptSkIzinSipb {
  @Column({ name: 'berlaku_str' })
  berlakuStr: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_sipb' })
  idSkIzinSipb: number;

  @Column({ name: 'jdwl_prtk', nullable: true })
  jdwlPrtk: string;

  @Column({ name: 'jenis_praktek', nullable: true })
  jenisPraktek: string;

  @Column({ name: 'jml_praktek', nullable: true })
  jmlPraktek: number;

  @Column({ name: 'kompetensi', nullable: true })
  kompetensi: string;

  @Column({ name: 'nama_sarana', nullable: true })
  namaSarana: string;

  @Column({ name: 'no_pertek', nullable: true })
  noPertek: string;

  @Column({ name: 'no_sk_lama' })
  noSkLama: string;

  @Column({ name: 'nomor_str' })
  nomorStr: string;

  @Column({ name: 'rekom_ibi' })
  rekomIbi: string;

  @Column({ name: 'sip_pertama', nullable: true })
  sipPertama: string;

  @Column({ name: 'str_terbaru', nullable: true })
  strTerbaru: string;

  @Column({ name: 'tempat_kerja' })
  tempatKerja: string;

  @Column({ name: 'tgl_pertek', nullable: true })
  tglPertek: string;

  @Column({ name: 'tgl_sk_lama', nullable: true })
  tglSkLama: string;
}
