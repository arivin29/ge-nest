import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'contract_site_service', schema: 'erp_pelanggan' })
export class PelangganContractSiteService {
  @PrimaryColumn({ name: 'id_contract_site_service' })
  idContractSiteService: string;

  @Column({ name: 'id_contract_site' })
  idContractSite: string;

  @Column({ name: 'id_service' })
  idService: string;

  @Column({ name: 'deskripsi_service', nullable: true })
  deskripsiService: string;

  @Column({ name: 'spesifikasi_service', nullable: true })
  spesifikasiService: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
