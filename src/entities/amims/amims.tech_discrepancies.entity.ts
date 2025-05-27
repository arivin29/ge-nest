import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'tech_discrepancies', schema: 'erp_amims' })
export class AmimsTechDiscrepancies {
  @PrimaryColumn({ name: 'id_tech_discrepancies' })
  idTechDiscrepancies: string;

  @Column({ name: 'id_part', nullable: true })
  idPart: string;

  @Column({ name: 'id_tech_log', nullable: true })
  idTechLog: string;

  @Column({ name: 'note_discrepancies', nullable: true })
  noteDiscrepancies: string;

  @Column({ name: 'is_discrepancies', nullable: true })
  isDiscrepancies: string;

  @Column({ name: 'date_discrepancies', nullable: true })
  dateDiscrepancies: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
