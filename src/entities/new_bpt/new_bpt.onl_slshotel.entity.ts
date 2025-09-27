import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_slshotel', schema: 'new_bpt' })
export class NewBptOnlSlshotel {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_slshotel' })
  idOnlSlshotel: number;

  @Column({ name: 'nama_hotel' })
  namaHotel: string;

  @Column({ name: 'nama_penanggungjawab' })
  namaPenanggungjawab: string;
}
