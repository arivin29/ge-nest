import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_stpt', schema: 'new_bpt' })
export class NewBptSkIzinStpt {
  @Column({ name: 'agama' })
  agama: string;

  @Column({ name: 'bahan' })
  bahan: string;

  @Column({ name: 'berlaku_str', nullable: true })
  berlakuStr: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_stpt' })
  idSkIzinStpt: number;

  @Column({ name: 'jenis_perawatan' })
  jenisPerawatan: string;

  @Column({ name: 'jk' })
  jk: string;

  @Column({ name: 'kewarganegaraan', nullable: true })
  kewarganegaraan: string;

  @Column({ name: 'masa_berlaku', nullable: true })
  masaBerlaku: string;

  @Column({ name: 'no_pertek', nullable: true })
  noPertek: string;

  @Column({ name: 'pekerjaan', nullable: true })
  pekerjaan: string;

  @Column({ name: 'pendidikan_formal' })
  pendidikanFormal: string;

  @Column({ name: 'tgl_pertek', nullable: true })
  tglPertek: string;
}
