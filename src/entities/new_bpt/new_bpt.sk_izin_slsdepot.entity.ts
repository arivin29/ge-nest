import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_slsdepot', schema: 'new_bpt' })
export class NewBptSkIzinSlsdepot {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_slsdepot' })
  idSkIzinSlsdepot: number;

  @Column({ name: 'nama_depot' })
  namaDepot: string;

  @Column({ name: 'nama_penanggungjawab' })
  namaPenanggungjawab: string;
}
