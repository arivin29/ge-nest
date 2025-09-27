import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_nitdpbh', schema: 'new_bpt' })
export class NewBptOnlNitdpbh {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_nitdpbh' })
  idOnlNitdpbh: number;

  @Column({ name: 'komoditas' })
  komoditas: string;
}
