import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PelangganClientContact } from 'src/entities/pelanggan';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { PelangganClientContactDto } from 'src/dto/pelanggan/pelanggan.client_contact.dto';
            

@Injectable()
export class ClientContactService extends BaseService<PelangganClientContact> {
  constructor(
    @InjectRepository(PelangganClientContact,'pelanggan')
    repo: Repository<PelangganClientContact>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,PelangganClientContactDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,PelangganClientContactDto);
    }
}
