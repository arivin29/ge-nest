import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'location_flight', schema: 'erp_amims' })
export class AmimsLocationFlight {
  @PrimaryColumn({ name: 'id_location_flight' })
  idLocationFlight: string;

  @Column({ name: 'name_location', nullable: true })
  nameLocation: string;

  @Column({ name: 'address', nullable: true })
  address: string;

  @Column({ name: 'created_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  createdAt: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;

  @Column({ name: 'status_location', nullable: true })
  statusLocation: string;

  @Column({ name: 'lon', nullable: true })
  lon: string;

  @Column({ name: 'lat', nullable: true })
  lat: string;
}
