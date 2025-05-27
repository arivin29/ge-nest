import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AmimsPurVendorContact } from 'src/entities/amims';
import { BaseService } from 'src/common/base/base.service';

            import { smartQueryEngineJoinMode,smartQueryRawJoinMode,SmartQueryInput } from 'src/common/helpers/smart-query-engine-join-mode';
            import { AmimsPurVendorContactDto } from 'src/dto/amims/amims.pur_vendor_contact.dto';
            

@Injectable()
export class PurVendorContactService extends BaseService<AmimsPurVendorContact> {
  constructor(
    @InjectRepository(AmimsPurVendorContact,'amims')
    repo: Repository<AmimsPurVendorContact>,
  ) {
    super(repo);
  }


    async findAllSmart(query: SmartQueryInput) {
    // return smartQueryEngineJoinMode(this.repo, 'e', query,AmimsPurVendorContactDto);
    return smartQueryRawJoinMode(this.repo, 'e', query,AmimsPurVendorContactDto);
    }
}
