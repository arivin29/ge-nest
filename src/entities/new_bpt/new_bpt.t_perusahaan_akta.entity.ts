import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_perusahaan_akta', schema: 'new_bpt' })
export class NewBptTPerusahaanAkta {
  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'id_izin' })
  idIzin: number;

  @Column({ name: 'id_perusahaan' })
  idPerusahaan: number;

  @PrimaryColumn({ name: 'id_perusahaan_akta' })
  idPerusahaanAkta: number;

  @Column({ name: 'id_perusahaan_akta_tipe' })
  idPerusahaanAktaTipe: number;

  @Column({ name: 'no' })
  no: string;

  @Column({ name: 'no_pengesahan' })
  noPengesahan: string;

  @Column({ name: 'notaris' })
  notaris: string;

  @Column({ name: 'tanggal' })
  tanggal: string;

  @Column({ name: 'tanggal_pengesahan' })
  tanggalPengesahan: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
