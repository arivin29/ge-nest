import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_iuperikanan', schema: 'new_bpt' })
export class NewBptOnlIuperikanan {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_iuperikanan' })
  idOnlIuperikanan: number;

  @Column({ name: 'jenis_kegiatan' })
  jenisKegiatan: string;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;
}
