import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ossipsd', schema: 'new_bpt' })
export class NewBptSkIzinOssipsd {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ossipsd' })
  idSkIzinOssipsd: number;

  @Column({ name: 'kbli' })
  kbli: string;

  @Column({ name: 'lahan' })
  lahan: string;

  @Column({ name: 'masa_berlaku', nullable: true })
  masaBerlaku: string;

  @Column({ name: 'nama_kbli' })
  namaKbli: string;

  @Column({ name: 'nama_sekolah', nullable: true })
  namaSekolah: string;

  @Column({ name: 'nib' })
  nib: string;

  @Column({ name: 'no_bap' })
  noBap: string;

  @Column({ name: 'no_pertek' })
  noPertek: string;

  @Column({ name: 'no_sk_lama', nullable: true })
  noSkLama: string;

  @Column({ name: 'penanggung_jawab', nullable: true })
  penanggungJawab: string;

  @Column({ name: 'tgl' })
  tgl: string;

  @Column({ name: 'tgl_bap', nullable: true })
  tglBap: string;

  @Column({ name: 'tgl_pertek' })
  tglPertek: string;
}
