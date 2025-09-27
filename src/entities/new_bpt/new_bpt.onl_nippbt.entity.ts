import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_nippbt', schema: 'new_bpt' })
export class NewBptOnlNippbt {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_nippbt' })
  idOnlNippbt: number;

  @Column({ name: 'jenis_ternak' })
  jenisTernak: string;

  @Column({ name: 'jumlah' })
  jumlah: string;
}
