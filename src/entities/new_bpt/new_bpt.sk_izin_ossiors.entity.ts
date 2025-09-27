import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ossiors', schema: 'new_bpt' })
export class NewBptSkIzinOssiors {
  @Column({ name: 'direktur', nullable: true })
  direktur: string;

  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ossiors' })
  idSkIzinOssiors: number;

  @Column({ name: 'klasifikasi_rs', nullable: true })
  klasifikasiRs: string;

  @Column({ name: 'nama_rs', nullable: true })
  namaRs: string;

  @Column({ name: 'nib' })
  nib: string;

  @Column({ name: 'no_pertek' })
  noPertek: string;

  @Column({ name: 'pemilik', nullable: true })
  pemilik: string;

  @Column({ name: 'sarana' })
  sarana: string;

  @Column({ name: 'tgl_pertek' })
  tglPertek: string;
}
