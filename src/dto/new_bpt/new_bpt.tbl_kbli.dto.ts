import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTblKbliDto {
  @ApiProperty({ required: false })
  @IsOptional()
  barjas: string;

  @ApiProperty({ required: false })
  @IsOptional()
  barjasTdp: string;

  @ApiProperty({ required: false })
  @IsOptional()
  kbli: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  kbliId: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  tahun: string;
}
