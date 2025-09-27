import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_nippbrph', schema: 'new_bpt' })
export class NewBptSkIzinNippbrph {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_nippbrph' })
  idSkIzinNippbrph: number;
}
