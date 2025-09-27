import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ikrg', schema: 'new_bpt' })
export class NewBptSkIzinIkrg {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ikrg' })
  idSkIzinIkrg: number;

  @Column({ name: 'kehilangan', nullable: true })
  kehilangan: string;

  @Column({ name: 'nama_fasilitas' })
  namaFasilitas: string;

  @Column({ name: 'no_sk_lama', nullable: true })
  noSkLama: string;

  @Column({ name: 'nomor_str' })
  nomorStr: string;

  @Column({ name: 'rekom_pari' })
  rekomPari: string;

  @Column({ name: 'tgl_sk_lama', nullable: true })
  tglSkLama: string;

  @Column({ name: 'untuk_kerja' })
  untukKerja: string;
}
