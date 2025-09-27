import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ipabuzena', schema: 'new_bpt' })
export class NewBptSkIzinIpabuzena {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ipabuzena' })
  idSkIzinIpabuzena: number;

  @Column({ name: 'no_rek', nullable: true })
  noRek: string;

  @Column({ name: 'tgl_reg', nullable: true })
  tglReg: string;

  @Column({ name: 'tgl_rek', nullable: true })
  tglRek: string;
}
