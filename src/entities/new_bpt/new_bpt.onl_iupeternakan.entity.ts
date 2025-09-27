import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_iupeternakan', schema: 'new_bpt' })
export class NewBptOnlIupeternakan {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_iupeternakan' })
  idOnlIupeternakan: number;

  @Column({ name: 'kapasitas_kandang' })
  kapasitasKandang: string;
}
