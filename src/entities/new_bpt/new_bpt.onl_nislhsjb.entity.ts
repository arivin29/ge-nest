import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_nislhsjb', schema: 'new_bpt' })
export class NewBptOnlNislhsjb {
  @Column({ name: 'golongan' })
  golongan: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_nislhsjb' })
  idOnlNislhsjb: number;

  @Column({ name: 'nama_penanggungjawab' })
  namaPenanggungjawab: string;
}
