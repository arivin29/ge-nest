import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ibd', schema: 'new_bpt' })
export class NewBptOnlIbd {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ibd' })
  idOnlIbd: number;

  @Column({ name: 'jenis_daging' })
  jenisDaging: string;
}
