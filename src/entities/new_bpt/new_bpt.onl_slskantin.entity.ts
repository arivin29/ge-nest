import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_slskantin', schema: 'new_bpt' })
export class NewBptOnlSlskantin {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_slskantin' })
  idOnlSlskantin: number;

  @Column({ name: 'nama_penanggungjawab' })
  namaPenanggungjawab: string;
}
