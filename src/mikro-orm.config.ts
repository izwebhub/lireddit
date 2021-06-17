import {Post} from "./entities/Post";
import {__prod__} from "./constants";

import {MikroORM} from '@mikro-orm/core';
import * as Path from "path";



export default {
    migrations: {
        path: Path.join(__dirname, './migrations'),
        pattern: /^[\w-]+\d+\.[tj ]s$/,
    },
    dbName: 'lireddit',
    user: 'postgres',
    password: 'docker',
    type: 'postgresql',
    entities: [Post],
    debug: !__prod__
} as Parameters<typeof MikroORM.init>[0];