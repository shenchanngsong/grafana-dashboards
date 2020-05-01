import { apiRequestManagement } from '../../../../../../../../react-plugins-deps/helpers/api';

class TableService {
  static getShowCreateTableMySQL({ database, service_id, table_name }) {
    const body = {
      // database,
      service_id,
      table_name,
    };
    return apiRequestManagement.post<any, any>('/Actions/StartMySQLShowCreateTable', body);
  }

  static getMysqlIndex({ database, service_id, table_name }) {
    const body = {
      database,
      service_id,
      table_name,
    };
    return apiRequestManagement.post<any, any>('/Actions/StartMySQLShowIndex', body);
  }

  static getMysqlTableStatus({ database, service_id, table_name }) {
    const body = {
      database,
      service_id,
      table_name,
    };
    return apiRequestManagement.post<any, any>('/Actions/StartMySQLShowTableStatusAction', body);
  }

  static getShowCreateTablePostgreSQL({ service_id, table_name }) {
    const body = {
      service_id,
      table_name,
    };
    return apiRequestManagement.post<any, any>('/Actions/StartPostgreSQLShowCreateTable', body);
  }

  static getPostgreSQLIndex({ database, service_id, table_name }) {
    const body = {
      database,
      service_id,
      table_name,
    };
    return apiRequestManagement.post<any, any>('/Actions/StartPostgreSQLShowIndex', body);
  }
}

export default TableService;
