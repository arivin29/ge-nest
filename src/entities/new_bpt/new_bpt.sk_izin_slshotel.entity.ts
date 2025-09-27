import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_slshotel', schema: 'new_bpt' })
export class NewBptSkIzinSlshotel {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_slshotel' })
  idSkIzinSlshotel: number;

  @Column({ name: 'nama_hotel' })
  namaHotel: string;

  @Column({ name: 'nama_penanggungjawab' })
  namaPenanggungjawab: string;

  @Column({ name: 'nama_perusahaan' })
  namaPerusahaan: string;
}
