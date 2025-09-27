import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ior', schema: 'new_bpt' })
export class NewBptOnlIor {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ior' })
  idOnlIor: number;

  @Column({ name: 'namakes' })
  namakes: string;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;

  @Column({ name: 'rs' })
  rs: string;
}
