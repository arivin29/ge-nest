import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'contract_jenis', schema: 'erp_pelanggan' })
export class PelangganContractJenis {
  @PrimaryColumn({ name: 'id_contract_jenis' })
  idContractJenis: string;

  @Column({ name: 'nama_contract_jenis' })
  namaContractJenis: string;

  @Column({ name: 'status_contract_jenis', nullable: true })
  statusContractJenis: string;

  @Column({ name: 'keterangan', nullable: true })
  keterangan: string;

  @Column({ name: 'role', nullable: true })
  role: string;

  @Column({ name: 'created_at', nullable: true })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true })
  updatedAt: string;
}
