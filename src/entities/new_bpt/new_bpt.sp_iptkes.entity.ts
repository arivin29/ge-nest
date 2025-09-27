import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sp_iptkes', schema: 'new_bpt' })
export class NewBptSpIptkes {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sp_iptkes' })
  idSpIptkes: number;

  @Column({ name: 'jenis_nakes', nullable: true })
  jenisNakes: string;

  @Column({ name: 'no_sip', nullable: true })
  noSip: string;

  @Column({ name: 'no_str', nullable: true })
  noStr: string;

  @Column({ name: 'perihal', nullable: true })
  perihal: string;

  @Column({ name: 'sarana', nullable: true })
  sarana: string;

  @Column({ name: 'tgl_sip', nullable: true })
  tglSip: string;

  @Column({ name: 'tgl_sk_dicabut', nullable: true })
  tglSkDicabut: string;
}
