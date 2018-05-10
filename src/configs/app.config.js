/**
 * Created by yuanjianxin on 2018/4/26.
 */
module.exports = {
    port: process.env.APP_PORT || 8080,

    bodyConf: {
        jsonLimit: "5mb",
        formLimit: "5mb",
        textLimit: "5mb",
        multipart: true
    },
    serviceConf: {
        dir:'./src/service'
    },
    middlewareConf:'./src/middleware',



}