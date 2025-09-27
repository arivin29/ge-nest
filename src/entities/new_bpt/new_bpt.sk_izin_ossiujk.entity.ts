import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ossiujk', schema: 'new_bpt' })
export class NewBptSkIzinOssiujk {
  @Column({ name: 'email', nullable: true })
  email: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ossiujk' })
  idSkIzinOssiujk: number;

  @Column({ name: 'kode_klasifikasi' })
  kodeKlasifikasi: string;

  @Column({ name: 'kualifikasi_badan_usaha' })
  kualifikasiBadanUsaha: string;

  @Column({ name: 'kualifikasi_bidang' })
  kualifikasiBidang: string;

  @Column({ name: 'nama_pjtbu' })
  namaPjtbu: string;

  @Column({ name: 'no', nullable: true })
  no: string;

  @Column({ name: 'no_sk_lama', nullable: true })
  noSkLama: string;

  @Column({ name: 'nomor_nib' })
  nomorNib: string;

  @Column({ name: 'tgl_sk_lama', nullable: true })
  tglSkLama: string;
}
