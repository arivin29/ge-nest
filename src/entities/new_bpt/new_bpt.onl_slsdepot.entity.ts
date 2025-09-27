import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_slsdepot', schema: 'new_bpt' })
export class NewBptOnlSlsdepot {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_slsdepot' })
  idOnlSlsdepot: number;

  @Column({ name: 'nama_depot' })
  namaDepot: string;

  @Column({ name: 'nama_penanggungjawab' })
  namaPenanggungjawab: string;
}
