import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ipsdswt', schema: 'new_bpt' })
export class NewBptSkIzinIpsdswt {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ipsdswt' })
  idSkIzinIpsdswt: number;

  @Column({ name: 'memperhatikan' })
  memperhatikan: string;

  @Column({ name: 'namasekolah' })
  namasekolah: string;
}
