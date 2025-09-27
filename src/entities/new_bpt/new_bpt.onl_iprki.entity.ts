import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_iprki', schema: 'new_bpt' })
export class NewBptOnlIprki {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_iprki' })
  idOnlIprki: number;

  @Column({ name: 'luas_bpsp' })
  luasBpsp: string;

  @Column({ name: 'luas_kapling' })
  luasKapling: string;

  @Column({ name: 'luas_kawasan' })
  luasKawasan: string;

  @Column({ name: 'luas_prasarana' })
  luasPrasarana: string;

  @Column({ name: 'luas_rth' })
  luasRth: string;

  @Column({ name: 'luas_sarjung' })
  luasSarjung: string;
}
