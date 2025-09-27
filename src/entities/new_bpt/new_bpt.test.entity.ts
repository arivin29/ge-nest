import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'test', schema: 'new_bpt' })
export class NewBptTest {
  @Column({ name: 'denda', nullable: true })
  denda: number;

  @PrimaryColumn({ name: 'id_izin' })
  idIzin: number;
}
