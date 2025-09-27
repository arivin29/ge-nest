import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_rmr', schema: 'new_bpt' })
export class NewBptSkIzinRmr {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_rmr' })
  idSkIzinRmr: number;

  @Column({ name: 'nama_penanggungjawab' })
  namaPenanggungjawab: string;

  @Column({ name: 'nama_usaha' })
  namaUsaha: string;
}
