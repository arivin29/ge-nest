import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ossiolk', schema: 'new_bpt' })
export class NewBptSkIzinOssiolk {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ossiolk' })
  idSkIzinOssiolk: number;

  @Column({ name: 'kbli' })
  kbli: string;

  @Column({ name: 'klasifikasi_lab', nullable: true })
  klasifikasiLab: string;

  @Column({ name: 'lab', nullable: true })
  lab: string;

  @Column({ name: 'masa_berlaku', nullable: true })
  masaBerlaku: string;

  @Column({ name: 'nama_kbli' })
  namaKbli: string;

  @Column({ name: 'nib' })
  nib: string;

  @Column({ name: 'no_pertek' })
  noPertek: string;

  @Column({ name: 'penanggung', nullable: true })
  penanggung: string;

  @Column({ name: 'tgl' })
  tgl: string;

  @Column({ name: 'tgl_pertek' })
  tglPertek: string;
}
