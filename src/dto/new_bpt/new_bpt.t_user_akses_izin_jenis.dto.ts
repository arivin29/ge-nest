import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTUserAksesIzinJenisDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true })
  idIzinJenis: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idIzinJenisUserAkses: number; // PK

  @ApiProperty({ required: true })
  idUser: number;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
