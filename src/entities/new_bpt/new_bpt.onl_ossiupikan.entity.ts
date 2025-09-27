import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ossiupikan', schema: 'new_bpt' })
export class NewBptOnlOssiupikan {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ossiupikan' })
  idOnlOssiupikan: number;

  @Column({ name: 'jenis_kegiatan' })
  jenisKegiatan: string;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;
}
