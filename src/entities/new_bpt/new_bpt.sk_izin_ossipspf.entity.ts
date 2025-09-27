import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ossipspf', schema: 'new_bpt' })
export class NewBptSkIzinOssipspf {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ossipspf' })
  idSkIzinOssipspf: number;

  @Column({ name: 'jenis_formal', nullable: true })
  jenisFormal: string;

  @Column({ name: 'kbli' })
  kbli: string;

  @Column({ name: 'lahan' })
  lahan: string;

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

  @Column({ name: 'status_lahan' })
  statusLahan: boolean;

  @Column({ name: 'tgl' })
  tgl: string;

  @Column({ name: 'tgl_bap', nullable: true })
  tglBap: string;

  @Column({ name: 'tgl_pertek' })
  tglPertek: string;

  @Column({ name: 'tipe_sekolah', nullable: true })
  tipeSekolah: string;
}
