import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ibd', schema: 'new_bpt' })
export class NewBptSkIzinIbd {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ibd' })
  idSkIzinIbd: number;

  @Column({ name: 'jenis_daging' })
  jenisDaging: string;

  @Column({ name: 'jenis_produk' })
  jenisProduk: string;

  @Column({ name: 'jumlah_penjualan' })
  jumlahPenjualan: string;
}
