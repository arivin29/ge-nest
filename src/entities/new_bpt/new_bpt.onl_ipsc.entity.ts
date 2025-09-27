import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ipsc', schema: 'new_bpt' })
export class NewBptOnlIpsc {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ipsc' })
  idOnlIpsc: number;

  @Column({ name: 'nama_psc' })
  namaPsc: string;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;
}
