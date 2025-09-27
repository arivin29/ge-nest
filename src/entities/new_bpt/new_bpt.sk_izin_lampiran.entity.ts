import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_lampiran', schema: 'new_bpt' })
export class NewBptSkIzinLampiran {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_sk_izin_lampiran' })
  idSkIzinLampiran: number;

  @Column({ name: 'nama_file' })
  namaFile: string;
}
