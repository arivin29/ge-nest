import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_iptkswt', schema: 'new_bpt' })
export class NewBptSkIzinIptkswt {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_iptkswt' })
  idSkIzinIptkswt: number;

  @Column({ name: 'memperhatikan' })
  memperhatikan: string;

  @Column({ name: 'namasekolah' })
  namasekolah: string;
}
