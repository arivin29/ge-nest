import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsLocationFlightDto {
  @ApiProperty({ required: false })
  address: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: true })
  idLocationFlight: string;

  @ApiProperty({ required: false })
  lat: string;

  @ApiProperty({ required: false })
  lon: string;

  @ApiProperty({ required: false })
  nameLocation: string;

  @ApiProperty({ required: false })
  statusLocation: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
