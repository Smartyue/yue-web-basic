/**
 * Created by yuanjianxin on 2018/4/26.
 */
module.exports={
    database: 'lendingone',
    username: 'lendingone',
    password: 'lendingone1234',
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql',
    timezone: '+08:00',
    pool: {
        max: 5, // 连接池中最大连接数量
        min: 0, // 连接池中最小连接数量
        idle: 10000 // 如果一个线程 10 秒钟内没有被使用过的话，那么就释放线程
    },
    operatorsAliases: false
}