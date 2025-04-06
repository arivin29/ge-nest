import { ApiProperty } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class UserGroupDto {
  @ApiProperty({ required: true })
  
  idUserGroup: string;
  @ApiProperty({ required: true })
  
  namaGroup: string;
  @ApiProperty({ required: true })
  
  status: string;
  @ApiProperty({ required: false })
  @IsOptional()
  deskripsi: string;
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: Date;
}
