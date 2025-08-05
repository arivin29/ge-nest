import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'aircraft', schema: 'erp_amims' })
export class AmimsAircraft {
  @Column({ name: 'ac_foto', nullable: true })
  acFoto: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'description_aircraft', nullable: true })
  descriptionAircraft: string;

  @Column({ name: 'hasapu', nullable: true })
  hasapu: string;

  @Column({ name: 'id_actype', nullable: true })
  idActype: string;

  @PrimaryColumn({ name: 'id_aircraft' })
  idAircraft: string;

  @Column({ name: 'is_deleted', nullable: true })
  isDeleted: number;

  @Column({ name: 'keyword_aircraft', nullable: true })
  keywordAircraft: string;

  @Column({ name: 'manufacture_aircraft', nullable: true })
  manufactureAircraft: string;

  @Column({ name: 'manufacture_date', nullable: true })
  manufactureDate: string;

  @Column({ name: 'manufacture_engine', nullable: true })
  manufactureEngine: string;

  @Column({ name: 'manufactured_by', nullable: true })
  manufacturedBy: string;

  @Column({ name: 'old_actype', nullable: true })
  oldActype: string;

  @Column({ name: 'old_id', nullable: true })
  oldId: string;

  @Column({ name: 'purchasedate', nullable: true })
  purchasedate: string;

  @Column({ name: 'reason_regschange', nullable: true })
  reasonRegschange: string;

  @Column({ name: 'registration_number', nullable: true })
  registrationNumber: string;

  @Column({ name: 'serial_number', nullable: true })
  serialNumber: string;

  @Column({ name: 'status_ac', nullable: true })
  statusAc: string;

  @Column({ name: 'tendurance', nullable: true })
  tendurance: number;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'year_made', nullable: true })
  yearMade: string;
}
