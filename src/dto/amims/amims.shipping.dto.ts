import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsShippingDto {
  @ApiProperty({ required: true })
  idShipping: string;

  @ApiProperty({ required: false })
  line1: string;

  @ApiProperty({ required: false })
  line2: string;

  @ApiProperty({ required: false })
  line3: string;

  @ApiProperty({ required: false })
  line4: string;

  @ApiProperty({ required: false })
  line5: string;

  @ApiProperty({ required: false })
  line6: string;

  @ApiProperty({ required: false })
  line7: string;

  @ApiProperty({ required: false })
  line8: string;

  @ApiProperty({ required: false })
  line0: string;

  @ApiProperty({ required: false })
  statusShipping: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
