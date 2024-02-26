"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeDataSource = void 0;
const apollo_datasource_1 = require("apollo-datasource");
const apollo_server_caching_1 = require("apollo-server-caching");
class SequelizeDataSource extends apollo_datasource_1.DataSource {
    constructor(sequelize) {
        super();
        this.client = sequelize;
    }
    initialize(config) {
        this.context = config.context;
        this.cache = config.cache || new apollo_server_caching_1.InMemoryLRUCache();
    }
    writeToFile(data, filename) {
        //Utils.writeFile(JSON.stringify(data), filename);
    }
}
exports.SequelizeDataSource = SequelizeDataSource;
//# sourceMappingURL=index.js.map