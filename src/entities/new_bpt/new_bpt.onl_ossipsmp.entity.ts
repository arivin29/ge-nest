import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ossipsmp', schema: 'new_bpt' })
export class NewBptOnlOssipsmp {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ossipsmp' })
  idOnlOssipsmp: number;

  @Column({ name: 'nama_smp' })
  namaSmp: string;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;
}
