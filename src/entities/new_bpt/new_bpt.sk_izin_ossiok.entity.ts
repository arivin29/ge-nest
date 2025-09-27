import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ossiok', schema: 'new_bpt' })
export class NewBptSkIzinOssiok {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ossiok' })
  idSkIzinOssiok: number;

  @Column({ name: 'kbli' })
  kbli: string;

  @Column({ name: 'klasifikasi_klinik' })
  klasifikasiKlinik: string;

  @Column({ name: 'nama_kbli' })
  namaKbli: string;

  @Column({ name: 'nama_klinik' })
  namaKlinik: string;

  @Column({ name: 'nib' })
  nib: string;

  @Column({ name: 'no_pertek' })
  noPertek: string;

  @Column({ name: 'no_sk_lama', nullable: true })
  noSkLama: string;

  @Column({ name: 'pemilik' })
  pemilik: string;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;

  @Column({ name: 'perihal', nullable: true })
  perihal: string;

  @Column({ name: 'perubahan', nullable: true })
  perubahan: string;

  @Column({ name: 'sarana' })
  sarana: string;

  @Column({ name: 'tgl', nullable: true })
  tgl: string;

  @Column({ name: 'tgl_bap', nullable: true })
  tglBap: string;

  @Column({ name: 'tgl_pertek', nullable: true })
  tglPertek: string;

  @Column({ name: 'tgl_sk_lama', nullable: true })
  tglSkLama: string;
}
