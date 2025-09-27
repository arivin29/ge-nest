import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_rmr', schema: 'new_bpt' })
export class NewBptOnlRmr {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_rmr' })
  idOnlRmr: number;

  @Column({ name: 'nama_penanggungjawab' })
  namaPenanggungjawab: string;
}
