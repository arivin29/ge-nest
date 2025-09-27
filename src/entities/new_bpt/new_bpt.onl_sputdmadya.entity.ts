import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_sputdmadya', schema: 'new_bpt' })
export class NewBptOnlSputdmadya {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_sputdmadya' })
  idOnlSputdmadya: number;

  @Column({ name: 'nama_unit' })
  namaUnit: string;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;
}
