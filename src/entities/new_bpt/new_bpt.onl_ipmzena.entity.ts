import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ipmzena', schema: 'new_bpt' })
export class NewBptOnlIpmzena {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ipmzena' })
  idOnlIpmzena: number;

  @Column({ name: 'jumlah_mobil' })
  jumlahMobil: string;

  @Column({ name: 'nopol' })
  nopol: string;
}
