import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_nirpp', schema: 'new_bpt' })
export class NewBptOnlNirpp {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_nirpp' })
  idOnlNirpp: number;

  @Column({ name: 'jenis_pakan' })
  jenisPakan: string;

  @Column({ name: 'kode_pakan' })
  kodePakan: string;

  @Column({ name: 'nama_dagang' })
  namaDagang: string;

  @Column({ name: 'no_sertifikat' })
  noSertifikat: string;

  @Column({ name: 'nos' })
  nos: string;

  @Column({ name: 'perihals' })
  perihals: string;

  @Column({ name: 'tgls' })
  tgls: string;
}
