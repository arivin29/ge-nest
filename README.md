ts-node tools/crud-generator.ts \
  --fromTable=contract \
  --nama=kontrak \
  --router=auth \
  --mode=default

npm run crud -- \
  --fromTable=client_site \
  --nama=client_site \
  --db=erp_pelanggan \
  --router=nonauth \
  --mode=default

npm run crud-report -- --fromTable=contract_site --nama=contract_site --router=auth
npm run crud-report -- --fromTable=contract --nama=contract --router=auth

npm run crud -- --fromTable=client --nama=client --db=erp_pelanggan --router=nonauth --mode=expert
npm run crud -- --fromTable=client_site --nama=client_site --db=erp_pelanggan --router=nonauth --mode=expert
npm run crud -- --fromTable=company_config --nama=company_config --db=erp_pelanggan --router=nonauth --mode=expert 

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
