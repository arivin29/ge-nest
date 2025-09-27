import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_lptks', schema: 'new_bpt' })
export class NewBptSkIzinLptks {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_lptks' })
  idSkIzinLptks: number;

  @Column({ name: 'memperhatikan' })
  memperhatikan: string;

  @Column({ name: 'nama_lptks' })
  namaLptks: string;

  @Column({ name: 'tgl', nullable: true })
  tgl: string;
}
