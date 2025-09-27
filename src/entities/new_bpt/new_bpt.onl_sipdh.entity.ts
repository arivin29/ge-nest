import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_sipdh', schema: 'new_bpt' })
export class NewBptOnlSipdh {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_sipdh' })
  idOnlSipdh: number;

  @Column({ name: 'ket_alamat_praktek' })
  ketAlamatPraktek: string;
}
