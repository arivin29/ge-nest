import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ilks', schema: 'new_bpt' })
export class NewBptOnlIlks {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ilks' })
  idOnlIlks: number;

  @Column({ name: 'klasifikasi_lab' })
  klasifikasiLab: string;

  @Column({ name: 'nama_lab' })
  namaLab: string;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;

  @Column({ name: 'tenaga_analis' })
  tenagaAnalis: string;
}
