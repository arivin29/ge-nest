import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'onl_ippkpuskesmas', schema: 'new_bpt' })
export class NewBptOnlIppkpuskesmas {
  @Column({ name: 'id_izin' })
  idIzin: number;

  @PrimaryColumn({ name: 'id_onl_ippkpuskesmas' })
  idOnlIppkpuskesmas: number;

  @Column({ name: 'klasifikasi_klinik' })
  klasifikasiKlinik: string;

  @Column({ name: 'nama_apoteker' })
  namaApoteker: string;

  @Column({ name: 'namakes' })
  namakes: string;

  @Column({ name: 'nomor_apoteker' })
  nomorApoteker: string;

  @Column({ name: 'penanggung_jawab' })
  penanggungJawab: string;

  @Column({ name: 'puskesmas' })
  puskesmas: string;
}
