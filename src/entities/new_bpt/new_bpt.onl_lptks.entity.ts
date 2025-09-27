import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_lptks', schema: 'new_bpt' })
export class NewBptOnlLptks {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_lptks' })
  idOnlLptks: number;

  @Column({ name: 'nama_lptks' })
  namaLptks: string;
}
