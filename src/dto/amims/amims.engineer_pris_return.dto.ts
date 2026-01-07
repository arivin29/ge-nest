import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsEngineerPrisReturnDto {
  @ApiProperty({ required: true })
  idEngineerPrisReturn: string;

  @ApiProperty({ required: false })
  dateReturn: string;

  @ApiProperty({ required: false })
  idEngineerPris: string;

  @ApiProperty({ required: false })
  statusReturn: string;
}
