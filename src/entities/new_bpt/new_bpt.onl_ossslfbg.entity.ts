import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ossslfbg', schema: 'new_bpt' })
export class NewBptOnlOssslfbg {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ossslfbg' })
  idOnlOssslfbg: number;

  @Column({ name: 'nib' })
  nib: string;
}
