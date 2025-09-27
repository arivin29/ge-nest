import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ipsdswt', schema: 'new_bpt' })
export class NewBptOnlIpsdswt {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ipsdswt' })
  idOnlIpsdswt: number;

  @Column({ name: 'nama_sd' })
  namaSd: string;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;
}
