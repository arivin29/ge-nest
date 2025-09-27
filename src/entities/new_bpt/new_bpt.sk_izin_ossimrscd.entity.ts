import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ossimrscd', schema: 'new_bpt' })
export class NewBptSkIzinOssimrscd {
  @Column({ name: 'direktur', nullable: true })
  direktur: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ossimrscd' })
  idSkIzinOssimrscd: number;

  @Column({ name: 'nama_rs', nullable: true })
  namaRs: string;

  @Column({ name: 'nib' })
  nib: string;

  @Column({ name: 'no_pertek', nullable: true })
  noPertek: string;

  @Column({ name: 'pemilik', nullable: true })
  pemilik: string;

  @Column({ name: 'perihal', nullable: true })
  perihal: string;

  @Column({ name: 'sarana' })
  sarana: string;

  @Column({ name: 'tgl_pertek', nullable: true })
  tglPertek: string;
}
