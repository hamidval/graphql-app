import { DataSource, DataSourceConfig } from 'apollo-datasource';
import { InMemoryLRUCache } from 'apollo-server-caching';
import { KeyValueCache } from 'apollo-server-core';
import { Model, Sequelize } from 'sequelize';

//import Utils from '../../utils';

export interface SequelizeConfig {
  host: string;
  port: string;
  database: string;
  username: string;
  password: string;
  dialect: 'mysql' | 'mariadb' | 'postgres' | 'mssql';
  dialectOptions?: object;
}

export abstract class SequelizeDataSource<TContext = any> extends DataSource {
  client: Sequelize;
  context!: TContext;
  cache!: KeyValueCache;

  constructor(sequelize: Sequelize) {
    super();
    this.client = sequelize;
  }

  override initialize(config: DataSourceConfig<TContext>): void {
    this.context = config.context;
    this.cache = config.cache || new InMemoryLRUCache();
  }

  protected writeToFile(data: Model<any, any> | Model<any, any>[], filename?: string): void {
    //Utils.writeFile(JSON.stringify(data), filename);
  }
}
