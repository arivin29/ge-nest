import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sk_izin_nirpp', schema: 'new_bpt' })
export class NewBptSkIzinNirpp {
  @Column({ name: 'id_izin_sk' })
  idIzinSk: number;

  @PrimaryColumn({ name: 'id_sk_izin_nirpp' })
  idSkIzinNirpp: number;

  @Column({ name: 'importir' })
  importir: string;

  @Column({ name: 'jenis_pakan' })
  jenisPakan: string;

  @Column({ name: 'kode_pakan' })
  kodePakan: string;

  @Column({ name: 'nama_dagang' })
  namaDagang: string;

  @Column({ name: 'no_sertifikat' })
  noSertifikat: string;

  @Column({ name: 'nos' })
  nos: string;

  @Column({ name: 'penggunaan' })
  penggunaan: string;

  @Column({ name: 'perihals' })
  perihals: string;

  @Column({ name: 'saran_teknis' })
  saranTeknis: string;

  @Column({ name: 'skdp' })
  skdp: string;

  @Column({ name: 'surat_permohonan' })
  suratPermohonan: string;

  @Column({ name: 'tdp' })
  tdp: string;

  @Column({ name: 'tgls' })
  tgls: string;
}
