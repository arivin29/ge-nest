import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_iui', schema: 'new_bpt' })
export class NewBptOnlIui {
  @Column({ name: 'id_izin', nullable: true })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_iui' })
  idOnlIui: number;
}
