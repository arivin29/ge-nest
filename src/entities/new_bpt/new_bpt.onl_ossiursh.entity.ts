import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ossiursh', schema: 'new_bpt' })
export class NewBptOnlOssiursh {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ossiursh' })
  idOnlOssiursh: number;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;
}
