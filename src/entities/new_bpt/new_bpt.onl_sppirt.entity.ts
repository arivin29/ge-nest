import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_sppirt', schema: 'new_bpt' })
export class NewBptOnlSppirt {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_sppirt' })
  idOnlSppirt: number;

  @Column({ name: 'jenis_pangan' })
  jenisPangan: string;

  @Column({ name: 'nama_merk' })
  namaMerk: string;
}
