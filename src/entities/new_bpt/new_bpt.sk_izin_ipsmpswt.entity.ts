import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ipsmpswt', schema: 'new_bpt' })
export class NewBptSkIzinIpsmpswt {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ipsmpswt' })
  idSkIzinIpsmpswt: number;

  @Column({ name: 'memperhatikan' })
  memperhatikan: string;

  @Column({ name: 'nama_smp' })
  namaSmp: string;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;
}
