import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ipkap', schema: 'new_bpt' })
export class NewBptOnlIpkap {
  @Column({ name: 'blok' })
  blok: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ipkap' })
  idOnlIpkap: number;

  @Column({ name: 'jml_kav' })
  jmlKav: string;
}
