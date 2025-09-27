import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ossippn', schema: 'new_bpt' })
export class NewBptSkIzinOssippn {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ossippn' })
  idSkIzinOssippn: number;

  @Column({ name: 'jenis_pendidikan', nullable: true })
  jenisPendidikan: string;

  @Column({ name: 'kbli' })
  kbli: string;

  @Column({ name: 'kegunaan', nullable: true })
  kegunaan: string;

  @Column({ name: 'lampiran', nullable: true })
  lampiran: string;

  @Column({ name: 'masa_berlaku', nullable: true })
  masaBerlaku: string;

  @Column({ name: 'memperhatikan', nullable: true })
  memperhatikan: string;

  @Column({ name: 'nama_kbli' })
  namaKbli: string;

  @Column({ name: 'nib' })
  nib: string;

  @Column({ name: 'no_lkp', nullable: true })
  noLkp: string;

  @Column({ name: 'no_pertek' })
  noPertek: string;

  @Column({ name: 'nomor', nullable: true })
  nomor: string;

  @Column({ name: 'pimpinan', nullable: true })
  pimpinan: string;

  @Column({ name: 'rumpunpend', nullable: true })
  rumpunpend: string;

  @Column({ name: 'tgl' })
  tgl: string;

  @Column({ name: 'tgl_pertek' })
  tglPertek: string;
}
