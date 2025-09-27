import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ilkh', schema: 'new_bpt' })
export class NewBptOnlIlkh {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ilkh' })
  idOnlIlkh: number;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;
}
