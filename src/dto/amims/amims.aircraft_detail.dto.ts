import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsAircraftDetailDto {
  @ApiProperty({ required: true })
  idAircraftDetail: string;

  @ApiProperty({ required: false })
  idAircraft: string;

  @ApiProperty({ required: false })
  yearOfManufacture: string;

  @ApiProperty({ required: false })
  emptyWeight: string;

  @ApiProperty({ required: false })
  usefulWeight: string;

  @ApiProperty({ required: false })
  payload: string;

  @ApiProperty({ required: false })
  range: string;

  @ApiProperty({ required: false })
  withFullPassenger: string;

  @ApiProperty({ required: false })
  mainRotorSystem: string;

  @ApiProperty({ required: false })
  mainRotorDiscDiameter: string;

  @ApiProperty({ required: false })
  tailRotorSystem: string;

  @ApiProperty({ required: false })
  tailRotorDiameter: string;

  @ApiProperty({ required: false })
  grossWeight: string;

  @ApiProperty({ required: false })
  crew: string;

  @ApiProperty({ required: false })
  passenger: string;

  @ApiProperty({ required: false })
  flightControl: string;

  @ApiProperty({ required: false })
  hoverCeilingOge: string;

  @ApiProperty({ required: false })
  maximumSpeed: string;

  @ApiProperty({ required: false })
  mainCabinSpace: string;

  @ApiProperty({ required: false })
  passengerDoorHeight: string;

  @ApiProperty({ required: false })
  passengerDoorWidth: string;

  @ApiProperty({ required: false })
  cargoAreaOverallLength: string;

  @ApiProperty({ required: false })
  cargoAreaMaximumHeight: string;

  @ApiProperty({ required: false })
  crewDoor: string;

  @ApiProperty({ required: false })
  maximumBaggageCompartment: string;

  @ApiProperty({ required: false })
  baggageCompartmentSpace: string;

  @ApiProperty({ required: false })
  landingGear: string;

  @ApiProperty({ required: false })
  emergencyFloatationGear: string;

  @ApiProperty({ required: false })
  poweredBy: string;

  @ApiProperty({ required: false })
  outputPower: string;

  @ApiProperty({ required: false })
  standardFuelCapacity: string;

  @ApiProperty({ required: false })
  takeOff: string;

  @ApiProperty({ required: false })
  maximumContinuous: string;

  @ApiProperty({ required: false })
  engine: string;

  @ApiProperty({ required: false })
  minute: string;

  @ApiProperty({ required: false })
  certificateOfRegistration: string;

  @ApiProperty({ required: false })
  compassSwing: string;

  @ApiProperty({ required: false })
  weightAndBalance: string;

  @ApiProperty({ required: false })
  radioPermit: string;

  @ApiProperty({ required: false })
  engineInstrument: string;

  @ApiProperty({ required: false })
  dualVhfCommunication: string;

  @ApiProperty({ required: false })
  hfCommunication: string;

  @ApiProperty({ required: false })
  dualAdfSystem: string;

  @ApiProperty({ required: false })
  dme: string;

  @ApiProperty({ required: false })
  dualRadioNavigationSystem: string;

  @ApiProperty({ required: false })
  radioAltimeter: string;

  @ApiProperty({ required: false })
  intercommunicationSystem: string;

  @ApiProperty({ required: false })
  emergencyLocateTransmitter: string;

  @ApiProperty({ required: false })
  transponder: string;

  @ApiProperty({ required: false })
  homer: string;

  @ApiProperty({ required: false })
  vor: string;

  @ApiProperty({ required: false })
  gyroMagneticCompass: string;

  @ApiProperty({ required: false })
  autoPilot: string;

  @ApiProperty({ required: false })
  searchLight: string;

  @ApiProperty({ required: false })
  landingLight: string;

  @ApiProperty({ required: false })
  wxRadar: string;

  @ApiProperty({ required: false })
  gps: string;

  @ApiProperty({ required: false })
  underwaterBeacon: string;

  @ApiProperty({ required: false })
  flightDirector: string;

  @ApiProperty({ required: false })
  cvr: string;

  @ApiProperty({ required: false })
  internalHoist: string;

  @ApiProperty({ required: false })
  externalCargoHook: string;

  @ApiProperty({ required: false })
  auxiliaryTank: string;

  @ApiProperty({ required: false })
  medicalStretcher: string;

  @ApiProperty({ required: false })
  lifeRaft: string;

  @ApiProperty({ required: false })
  lifeVest: string;

  @ApiProperty({ required: false })
  crewLifeVest: string;

  @ApiProperty({ required: false })
  earProtector: string;

  @ApiProperty({ required: false })
  firstAidKit: string;

  @ApiProperty({ required: false })
  floatingBeacon: string;

  @ApiProperty({ required: false })
  survivalKit: string;

  @ApiProperty({ required: false })
  publicAddress: string;

  @ApiProperty({ required: false })
  personal: string;

  @ApiProperty({ required: false })
  moreDetail: string;

  @ApiProperty({ required: false })
  configuration: string;

  @ApiProperty({ required: false })
  cargoDoor: string;

  @ApiProperty({ required: false })
  emergency: string;

  @ApiProperty({ required: false })
  fullDoc: string;

  @ApiProperty({ required: false })
  airworthiness: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
