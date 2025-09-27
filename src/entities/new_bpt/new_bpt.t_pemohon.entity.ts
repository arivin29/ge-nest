import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 't_pemohon', schema: 'new_bpt' })
export class NewBptTPemohon {
  @Column({ name: 'alamat' })
  alamat: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'fax' })
  fax: string;

  @Column({ name: 'handphone' })
  handphone: string;

  @Column({ name: 'id_kabkot' })
  idKabkot: string;

  @Column({ name: 'id_kec' })
  idKec: string;

  @Column({ name: 'id_kel' })
  idKel: string;

  @PrimaryColumn({ name: 'id_pemohon' })
  idPemohon: number;

  @Column({ name: 'id_pemohon_identitas' })
  idPemohonIdentitas: number;

  @Column({ name: 'id_prov' })
  idProv: string;

  @Column({ name: 'id_user' })
  idUser: number;

  @Column({ name: 'kode_pos' })
  kodePos: number;

  @Column({ name: 'nama' })
  nama: string;

  @Column({ name: 'no_identitas' })
  noIdentitas: string;

  @Column({ name: 'npwp' })
  npwp: string;

  @Column({ name: 'rt' })
  rt: string;

  @Column({ name: 'rw' })
  rw: string;

  @Column({ name: 'telepon' })
  telepon: string;

  @Column({ name: 'tempat_lahir' })
  tempatLahir: string;

  @Column({ name: 'tgl_lahir', nullable: true })
  tglLahir: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
