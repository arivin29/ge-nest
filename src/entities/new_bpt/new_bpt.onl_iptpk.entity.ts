import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_iptpk', schema: 'new_bpt' })
export class NewBptOnlIptpk {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_iptpk' })
  idOnlIptpk: number;

  @Column({ name: 'penanggungjawab', nullable: true })
  penanggungjawab: string;
}
