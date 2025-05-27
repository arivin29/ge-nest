import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'ata', schema: 'erp_amims' })
export class AmimsAta {
  @PrimaryColumn({ name: 'id_ata' })
  idAta: string;

  @Column({ name: 'code_ata', nullable: true })
  codeAta: string;

  @Column({ name: 'ata', nullable: true })
  ata: string;

  @Column({ name: 'keyword_ata', nullable: true })
  keywordAta: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'is_deleted', nullable: true })
  isDeleted: number;

  @Column({ name: 'old_id', nullable: true })
  oldId: string;

  @Column({ name: 'ata_type', nullable: true })
  ataType: string;
}
