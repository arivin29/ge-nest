import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ipmzena', schema: 'new_bpt' })
export class NewBptSkIzinIpmzena {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ipmzena' })
  idSkIzinIpmzena: number;

  @Column({ name: 'jumlah_mobil', nullable: true })
  jumlahMobil: string;

  @Column({ name: 'no_rek', nullable: true })
  noRek: string;

  @Column({ name: 'nopol', nullable: true })
  nopol: string;

  @Column({ name: 'tgl_reg', nullable: true })
  tglReg: string;

  @Column({ name: 'tgl_rek', nullable: true })
  tglRek: string;
}
