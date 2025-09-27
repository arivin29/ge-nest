import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_ia', schema: 'new_bpt' })
export class NewBptSkIzinIa {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_ia' })
  idSkIzinIa: number;

  @Column({ name: 'masa_berlaku_sia' })
  masaBerlakuSia: string;

  @Column({ name: 'masa_berlaku_sipa' })
  masaBerlakuSipa: string;

  @Column({ name: 'masa_berlaku_stra' })
  masaBerlakuStra: string;

  @Column({ name: 'no_sipa' })
  noSipa: string;

  @Column({ name: 'no_stra' })
  noStra: string;

  @Column({ name: 'sarana', nullable: true })
  sarana: string;
}
