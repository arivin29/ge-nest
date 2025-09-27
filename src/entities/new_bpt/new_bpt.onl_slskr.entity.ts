import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_slskr', schema: 'new_bpt' })
export class NewBptOnlSlskr {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_slskr' })
  idOnlSlskr: number;

  @Column({ name: 'nama_penanggungjawab' })
  namaPenanggungjawab: string;
}
