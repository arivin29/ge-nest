import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ipetzena', schema: 'new_bpt' })
export class NewBptOnlIpetzena {
  @Column({ name: 'agama' })
  agama: string;

  @Column({ name: 'alamat' })
  alamat: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ipetzena' })
  idOnlIpetzena: number;

  @Column({ name: 'nama_jenazah' })
  namaJenazah: string;
}
