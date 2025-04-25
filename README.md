npx ts-node tools/generate-dto.ts --db=erp_pelanggan --all-tables --with-entity


# Stop app
CTRL + C

# Hapus dist & cache jika pakai ts-node build cache
rm -rf dist .tsbuildinfo

# Start ulang
npm run start:dev

npm run crud-report-widget -- --fromTable=contract_site --nama=contract_site --router=auth
{
    "where": {
        "status_contract_site": { "eq": "aktif" }
    },
    "joinWhere": {
        "contract": {
            "status_kontrak": "aktif"
        },
        "client_site": {
            "kota": "Jakarta"
        }
    },
     
    "order": {
        "by": "status_contract_site",
        "direction": "asc"
    } ,
    "select": [{"type":"count","field":"status_contract_site","alias":"total"}, {"type":"max","field":"status_contract_site","alias":"status_contract_site"}],
    "groupBy": ["status_contract_site"]
}

npm run crud-report -- --fromTable=contract_site --nama=contract_site --router=auth

{
    "where": {
        "status_contract_site": { "eq": "aktif" }
    },
    "joinWhere": {
        "contract": {
            "status_kontrak": "aktif"
        },
        "client_site": {
            "kota": "Jakarta"
        }
    },
    "fsearch": {
        "keyword": "1",
        "fields": [
            "contract.nomor_kontrak",
            "client_site.nama_site"
        ]
    },
    "include": [
        {
            "name": "contract",
            "type": "single",
            "select": ["idContract","idClient", "nomorKontrak", "statusKontrak"]
        },
        {
            "name": "client",
            "parent": "contract",
            "type": "single"
        },
        {
            "name": "work_schedule",
            "type": "array"
        }
    ],
    "order": {
        "by": "contract.nomor_kontrak",
        "direction": "asc"
    },
    "pagination": {
        "page": 1,
        "limit": 2
    }
}

TOOLS -->
npm run crud -- --fromTable=workflow --nama=workflow --db=erp_tools --router=auth --mode=expert  
npm run crud -- --fromTable=workflow_step --nama=workflow_step --db=erp_tools --router=auth --mode=expert  
npm run crud -- --fromTable=workflow_log --nama=workflow_log --db=erp_tools --router=auth --mode=expert 
npm run crud -- --fromTable=workflow_aggregator --nama=workflow_aggregator --db=erp_tools --router=auth --mode=expert 
npm run crud -- --fromTable=custom_field_group --nama=custom_field_group --db=erp_tools --router=auth --mode=expert 
npm run crud -- --fromTable=custom_field --nama=custom_field --db=erp_tools --router=auth --mode=expert 
npm run crud -- --fromTable=custom_field_value --nama=custom_field_value --db=erp_tools --router=auth --mode=expert  

npm run crud -- --fromTable=document_numbering --nama=document_numbering --db=erp_tools --router=auth --mode=expert  
npm run crud -- --fromTable=document_numbering_counter --nama=document_numbering_counter --db=erp_tools --router=auth --mode=expert 



npm run crud-report -- --fromTable=workflow --nama=workflow --db=erp_tools --router=auth  
npm run crud-report -- --fromTable=workflow_step --nama=workflow_step --db=erp_tools --router=auth  
npm run crud-report -- --fromTable=workflow_log --nama=workflow_log --db=erp_tools --router=auth 
npm run crud-report -- --fromTable=custom_field_group --nama=custom_field_group --db=erp_tools --router=auth 
npm run crud-report -- --fromTable=custom_field_value --nama=custom_field_value --db=erp_tools --router=auth 

npm run crud-report-widget -- --fromTable=workflow --nama=workflow --db=erp_tools --router=auth  
npm run crud-report-widget -- --fromTable=workflow_step --nama=workflow_step --db=erp_tools --router=auth  
npm run crud-report-widget -- --fromTable=workflow_log --nama=workflow_log --db=erp_tools --router=auth 
npm run crud-report-widget -- --fromTable=custom_field_group --nama=custom_field_group --db=erp_tools --router=auth 
npm run crud-report-widget -- --fromTable=custom_field_value --nama=custom_field_value --db=erp_tools --router=auth 

MODEL -->
 

REPORT -->
npm run crud-report -- --fromTable=users --nama=users --db=erp_acl --router=auth
npm run crud-report-widget -- --fromTable=users --nama=users --db=erp_acl --router=auth

npm run crud-report -- --fromTable=contract_site --nama=contract_site --db=erp_pelanggan --router=auth
npm run crud-report -- --fromTable=contract --nama=contract --db=erp_pelanggan --router=nonauth
npm run crud-report -- --fromTable=contract_site --nama=contract_site --db=erp_pelanggan --router=nonauth --mode=expert
npm run crud-report -- --fromTable=client --nama=client --db=erp_pelanggan --router=nonauth --mode=expert
npm run crud-report -- --fromTable=invoice --nama=invoice --db=erp_pelanggan --router=nonauth --mode=expert
WIDGET -->
npm run crud-report-widget -- --fromTable=contract_site --nama=contract_site --db=erp_pelanggan --router=auth
npm run crud-report-widget -- --fromTable=contract --nama=contract --db=erp_pelanggan --router=auth 
npm run crud-report-widget -- --fromTable=client --nama=client --db=erp_pelanggan --router=auth 
npm run crud-report-widget -- --fromTable=invoice --nama=invoice --db=erp_pelanggan --router=auth 

 
npm run crud -- --fromTable=module --nama=module --db=erp --router=nonauth --mode=expert  

npm run crud -- --fromTable=contract_jenis --nama=contract_jenis --db=erp_pelanggan --router=nonauth --mode=expert
npm run crud -- --fromTable=client --nama=client --db=erp_pelanggan --router=nonauth --mode=expert
npm run crud -- --fromTable=client_contact --nama=client_contact --db=erp_pelanggan --router=nonauth --mode=expert
npm run crud -- --fromTable=client_site --nama=client_site --db=erp_pelanggan --router=nonauth --mode=expert
npm run crud -- --fromTable=company_config --nama=company_config --db=erp_pelanggan --router=nonauth --mode=expert 

npm run crud -- --fromTable=user_tokens --nama=user_tokens --db=erp_acl --router=nonauth --mode=expert
npm run crud -- --fromTable=users --nama=users --db=erp_acl --router=nonauth --mode=expert
npm run crud -- --fromTable=user_group --nama=user_group --db=erp_acl --router=nonauth --mode=expert

npm run crud -- --fromTable=company_config --nama=company_config --db=erp_pelanggan --router=nonauth --mode=expert

npm run crud -- --fromTable=contact_client_use --nama=contact_client_use --db=erp_pelanggan --router=nonauth --mode=expert

npm run crud -- --fromTable=contract --nama=contract --db=erp_pelanggan --router=nonauth --mode=expert

npm run crud -- --fromTable=contract_site --nama=contract_site --db=erp_pelanggan --router=nonauth --mode=expert

npm run crud -- --fromTable=contract_site_service --nama=contract_site_service --db=erp_pelanggan --router=nonauth --mode=expert

npm run crud -- --fromTable=custom_field --nama=custom_field --db=erp_pelanggan --router=nonauth --mode=expert

npm run crud -- --fromTable=custom_field_value --nama=custom_field_value --db=erp_pelanggan --router=nonauth --mode=expert

npm run crud -- --fromTable=faktur --nama=faktur --db=erp_pelanggan --router=nonauth --mode=expert

npm run crud -- --fromTable=invoice --nama=invoice --db=erp_pelanggan --router=nonauth --mode=expert

npm run crud -- --fromTable=kantor --nama=kantor --db=erp_pelanggan --router=nonauth --mode=expert

npm run crud -- --fromTable=service --nama=service --db=erp_pelanggan --router=nonauth --mode=expert

npm run crud -- --fromTable=work_schedule --nama=work_schedule --db=erp_pelanggan --router=nonauth --mode=expert

npm run crud -- --fromTable=work_schedule_teknisi --nama=work_schedule_teknisi --db=erp_pelanggan --router=nonauth --mode=expert


ACL
npm run crud -- --fromTable=user_group --nama=user_group --db=erp_acl --router=auth --mode=expert


DOCUMENT
npm run crud -- --fromTable=document --nama=document --db=erp_document --router=nonauth --mode=expert   
 




AUT hHHH

2. Gunakan JwtAuthGuard jika ingin standar NestJS
Kalau kamu ingin lebih idiomatik daripada middleware, pakai ini:

ts
Salin
Edit
// guards/jwt-auth.guard.ts
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}
Lalu pakai di controller:

ts
Salin
Edit
@UseGuards(JwtAuthGuard)
@Get('me')
getMe(@Request() req) {
  return req.user;
}

Kalau kamu udah siap, berikut lanjutan yang bisa kamu minta:

 ✅ Setup refresh token logic yang aman (dengan rotation)

 ✅ Endpoint me untuk lihat user aktif

 ✅ Middleware force redirect kalau status pending

 ✅ Simpan refresh token di DB atau Redis (opsional)

 ✅ Setup 2FA (nanti)