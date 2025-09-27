import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_rumaja', schema: 'new_bpt' })
export class NewBptOnlRumaja {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_rumaja' })
  idOnlRumaja: number;

  @Column({ name: 'jenis_penggunaan' })
  jenisPenggunaan: string;

  @Column({ name: 'luas_pemakaian' })
  luasPemakaian: number;

  @Column({ name: 'rencana_penggunaan' })
  rencanaPenggunaan: string;
}
