
import { ApiProperty } from '@nestjs/swagger';
import { ContractDto } from './contract.dto';
import { ClientDto } from '../../client/dto/client.dto';

export class ContractReportDto extends ContractDto {
    @ApiProperty({ type: ClientDto })
    client: ClientDto;

}
