import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlDamijaDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlDamija: number; // PK

  @ApiProperty({ required: true })
  jenisPenggunaan: string;

  @ApiProperty({ required: true })
  luasPemakaian: number;

  @ApiProperty({ required: true })
  rencanaPenggunaan: string;
}
