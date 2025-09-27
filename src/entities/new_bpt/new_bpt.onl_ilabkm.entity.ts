import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ilabkm', schema: 'new_bpt' })
export class NewBptOnlIlabkm {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ilabkm' })
  idOnlIlabkm: number;

  @Column({ name: 'nama_lab' })
  namaLab: string;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;
}
