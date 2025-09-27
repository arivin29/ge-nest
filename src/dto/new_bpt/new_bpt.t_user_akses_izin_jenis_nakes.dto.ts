import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTUserAksesIzinJenisNakesDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idIzinJenisUserNakes: number; // PK

  @ApiProperty({ required: true })
  idMIzinJenisNakes: number;

  @ApiProperty({ required: true })
  idUser: number;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
