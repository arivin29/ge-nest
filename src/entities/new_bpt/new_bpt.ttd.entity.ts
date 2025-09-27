import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'ttd', schema: 'new_bpt' })
export class NewBptTtd {
  @PrimaryColumn({ name: 'id_ttd' })
  idTtd: number;

  @Column({ name: 'jabatan' })
  jabatan: string;

  @Column({ name: 'kop', nullable: true })
  kop: string;

  @Column({ name: 'nama' })
  nama: string;

  @Column({ name: 'nik' })
  nik: string;

  @Column({ name: 'sk', nullable: true })
  sk: string;

  @Column({ name: 'status' })
  status: boolean;
}
