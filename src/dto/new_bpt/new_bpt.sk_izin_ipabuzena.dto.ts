import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinIpabuzenaDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinIpabuzena: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  noRek: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglReg: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglRek: string;
}
