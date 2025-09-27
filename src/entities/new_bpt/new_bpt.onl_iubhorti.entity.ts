import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_iubhorti', schema: 'new_bpt' })
export class NewBptOnlIubhorti {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_iubhorti' })
  idOnlIubhorti: number;

  @Column({ name: 'komoditas' })
  komoditas: string;
}
