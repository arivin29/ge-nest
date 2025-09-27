import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlSppirtDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlSppirt: number; // PK

  @ApiProperty({ required: true })
  jenisPangan: string;

  @ApiProperty({ required: true })
  namaMerk: string;
}
