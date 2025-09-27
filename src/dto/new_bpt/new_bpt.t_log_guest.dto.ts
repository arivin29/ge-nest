import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTLogGuestDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true })
  email: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idTLogGuest: number; // PK

  @ApiProperty({ required: true })
  ipUser: string;

  @ApiProperty({ required: true })
  ket: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;

  @ApiProperty({ required: true })
  userAgent: string;
}
