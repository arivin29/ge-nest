import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ossippv', schema: 'new_bpt' })
export class NewBptSkIzinOssippv {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ossippv' })
  idSkIzinOssippv: number;

  @Column({ name: 'jabatan' })
  jabatan: string;

  @Column({ name: 'kbli' })
  kbli: string;

  @Column({ name: 'masa_berlaku', nullable: true })
  masaBerlaku: string;

  @Column({ name: 'nama_kbli' })
  namaKbli: string;

  @Column({ name: 'nib' })
  nib: string;

  @Column({ name: 'no_pertek' })
  noPertek: string;

  @Column({ name: 'tgl' })
  tgl: string;

  @Column({ name: 'tgl_pertek' })
  tglPertek: string;
}
