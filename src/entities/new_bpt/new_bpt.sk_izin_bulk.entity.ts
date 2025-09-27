import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_bulk', schema: 'new_bpt' })
export class NewBptSkIzinBulk {
  @Column({ name: 'id_izin_jenis', nullable: true })
  idIzinJenis: number;

  @Column({ name: 'id_izin_sk', nullable: true })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_bulk' })
  idSkIzinBulk: number;

  @Column({ name: 'label_sk', nullable: true })
  labelSk: string;

  @Column({ name: 'param_sk', nullable: true })
  paramSk: string;

  @Column({ name: 'tipe_data', nullable: true })
  tipeData: string;

  @Column({ name: 'value_sk', nullable: true })
  valueSk: string;
}
