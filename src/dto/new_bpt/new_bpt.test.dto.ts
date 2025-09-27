import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTestDto {
  @ApiProperty({ required: false })
  @IsOptional()
  denda: number;

  @ApiProperty({ required: false, description: 'Primary Key' })
  @IsOptional()
  idIzin: number; // PK
}
