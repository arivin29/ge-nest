import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ipbkrj', schema: 'new_bpt' })
export class NewBptOnlIpbkrj {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ipbkrj' })
  idOnlIpbkrj: number;

  @Column({ name: 'nama_bkk' })
  namaBkk: string;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;
}
