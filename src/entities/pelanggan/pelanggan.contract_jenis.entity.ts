import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'contract_jenis', schema: 'erp_pelanggan' })
export class PelangganContractJenis {
  @PrimaryColumn({ name: 'id_contract_jenis' })
  idContractJenis: string;

  @Column({ name: 'nama_contract_jenis' })
  namaContractJenis: string;

  @Column({ name: 'status_contract_jenis' })
  statusContractJenis: string;

  @Column({ name: 'keterangan' })
  keterangan: string;

  @Column({ name: 'role' })
  role: string;

  @Column({ name: 'created_at' })
  createdAt: string;

  @Column({ name: 'updated_at' })
  updatedAt: string;
}
