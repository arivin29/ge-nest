import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_osslptks', schema: 'new_bpt' })
export class NewBptOnlOsslptks {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_osslptks' })
  idOnlOsslptks: number;

  @Column({ name: 'jenis_program', nullable: true })
  jenisProgram: string;

  @Column({ name: 'nib', nullable: true })
  nib: string;
}
