import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'aircraft_detail', schema: 'erp_amims' })
export class AmimsAircraftDetail {
  @PrimaryColumn({ name: 'id_aircraft_detail' })
  idAircraftDetail: string;

  @Column({ name: 'id_aircraft', nullable: true })
  idAircraft: string;

  @Column({ name: 'year_of_manufacture', nullable: true })
  yearOfManufacture: string;

  @Column({ name: 'empty_weight', nullable: true })
  emptyWeight: string;

  @Column({ name: 'useful_weight', nullable: true })
  usefulWeight: string;

  @Column({ name: 'payload', nullable: true })
  payload: string;

  @Column({ name: 'range', nullable: true })
  range: string;

  @Column({ name: 'with_full_passenger', nullable: true })
  withFullPassenger: string;

  @Column({ name: 'main_rotor_system', nullable: true })
  mainRotorSystem: string;

  @Column({ name: 'main_rotor_disc_diameter', nullable: true })
  mainRotorDiscDiameter: string;

  @Column({ name: 'tail_rotor_system', nullable: true })
  tailRotorSystem: string;

  @Column({ name: 'tail_rotor_diameter', nullable: true })
  tailRotorDiameter: string;

  @Column({ name: 'gross_weight', nullable: true })
  grossWeight: string;

  @Column({ name: 'crew', nullable: true })
  crew: string;

  @Column({ name: 'passenger', nullable: true })
  passenger: string;

  @Column({ name: 'flight_control', nullable: true })
  flightControl: string;

  @Column({ name: 'hover_ceiling_oge', nullable: true })
  hoverCeilingOge: string;

  @Column({ name: 'maximum_speed', nullable: true })
  maximumSpeed: string;

  @Column({ name: 'main_cabin_space', nullable: true })
  mainCabinSpace: string;

  @Column({ name: 'passenger_door_height', nullable: true })
  passengerDoorHeight: string;

  @Column({ name: 'passenger_door_width', nullable: true })
  passengerDoorWidth: string;

  @Column({ name: 'cargo_area_overall_length', nullable: true })
  cargoAreaOverallLength: string;

  @Column({ name: 'cargo_area_maximum_height', nullable: true })
  cargoAreaMaximumHeight: string;

  @Column({ name: 'crew_door', nullable: true })
  crewDoor: string;

  @Column({ name: 'maximum_baggage_compartment', nullable: true })
  maximumBaggageCompartment: string;

  @Column({ name: 'baggage_compartment_space', nullable: true })
  baggageCompartmentSpace: string;

  @Column({ name: 'landing_gear', nullable: true })
  landingGear: string;

  @Column({ name: 'emergency_floatation_gear', nullable: true })
  emergencyFloatationGear: string;

  @Column({ name: 'powered_by', nullable: true })
  poweredBy: string;

  @Column({ name: 'output_power', nullable: true })
  outputPower: string;

  @Column({ name: 'standard_fuel_capacity', nullable: true })
  standardFuelCapacity: string;

  @Column({ name: 'take_off', nullable: true })
  takeOff: string;

  @Column({ name: 'maximum_continuous', nullable: true })
  maximumContinuous: string;

  @Column({ name: 'engine', nullable: true })
  engine: string;

  @Column({ name: 'minute', nullable: true })
  minute: string;

  @Column({ name: 'certificate_of_registration', nullable: true })
  certificateOfRegistration: string;

  @Column({ name: 'compass_swing', nullable: true })
  compassSwing: string;

  @Column({ name: 'weight_and_balance', nullable: true })
  weightAndBalance: string;

  @Column({ name: 'radio_permit', nullable: true })
  radioPermit: string;

  @Column({ name: 'engine_instrument', nullable: true })
  engineInstrument: string;

  @Column({ name: 'dual_vhf_communication', nullable: true })
  dualVhfCommunication: string;

  @Column({ name: 'hf_communication', nullable: true })
  hfCommunication: string;

  @Column({ name: 'dual_adf_system', nullable: true })
  dualAdfSystem: string;

  @Column({ name: 'dme', nullable: true })
  dme: string;

  @Column({ name: 'dual_radio_navigation_system', nullable: true })
  dualRadioNavigationSystem: string;

  @Column({ name: 'radio_altimeter', nullable: true })
  radioAltimeter: string;

  @Column({ name: 'intercommunication_system', nullable: true })
  intercommunicationSystem: string;

  @Column({ name: 'emergency_locate_transmitter', nullable: true })
  emergencyLocateTransmitter: string;

  @Column({ name: 'transponder', nullable: true })
  transponder: string;

  @Column({ name: 'homer', nullable: true })
  homer: string;

  @Column({ name: 'vor', nullable: true })
  vor: string;

  @Column({ name: 'gyro_magnetic_compass', nullable: true })
  gyroMagneticCompass: string;

  @Column({ name: 'auto_pilot', nullable: true })
  autoPilot: string;

  @Column({ name: 'search_light', nullable: true })
  searchLight: string;

  @Column({ name: 'landing_light', nullable: true })
  landingLight: string;

  @Column({ name: 'wx_radar', nullable: true })
  wxRadar: string;

  @Column({ name: 'gps', nullable: true })
  gps: string;

  @Column({ name: 'underwater_beacon', nullable: true })
  underwaterBeacon: string;

  @Column({ name: 'flight_director', nullable: true })
  flightDirector: string;

  @Column({ name: 'cvr', nullable: true })
  cvr: string;

  @Column({ name: 'internal_hoist', nullable: true })
  internalHoist: string;

  @Column({ name: 'external_cargo_hook', nullable: true })
  externalCargoHook: string;

  @Column({ name: 'auxiliary_tank', nullable: true })
  auxiliaryTank: string;

  @Column({ name: 'medical_stretcher', nullable: true })
  medicalStretcher: string;

  @Column({ name: 'life_raft', nullable: true })
  lifeRaft: string;

  @Column({ name: 'life_vest', nullable: true })
  lifeVest: string;

  @Column({ name: 'crew_life_vest', nullable: true })
  crewLifeVest: string;

  @Column({ name: 'ear_protector', nullable: true })
  earProtector: string;

  @Column({ name: 'first_aid_kit', nullable: true })
  firstAidKit: string;

  @Column({ name: 'floating_beacon', nullable: true })
  floatingBeacon: string;

  @Column({ name: 'survival_kit', nullable: true })
  survivalKit: string;

  @Column({ name: 'public_address', nullable: true })
  publicAddress: string;

  @Column({ name: 'personal', nullable: true })
  personal: string;

  @Column({ name: 'more_detail', nullable: true })
  moreDetail: string;

  @Column({ name: 'configuration', nullable: true })
  configuration: string;

  @Column({ name: 'cargo_door', nullable: true })
  cargoDoor: string;

  @Column({ name: 'emergency', nullable: true })
  emergency: string;

  @Column({ name: 'full_doc', nullable: true })
  fullDoc: string;

  @Column({ name: 'airworthiness', nullable: true })
  airworthiness: string;

  @Column({ name: 'updated_at', nullable: true, default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: string;
}
