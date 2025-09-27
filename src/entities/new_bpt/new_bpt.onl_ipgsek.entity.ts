import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ipgsek', schema: 'new_bpt' })
export class NewBptOnlIpgsek {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ipgsek' })
  idOnlIpgsek: number;

  @Column({ name: 'nama_sekolah' })
  namaSekolah: string;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;
}
