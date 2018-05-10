/**
 * Created by yuanjianxin on 2018/4/26.
 */
module.exports = (config) => {


    return async(ctx, next) => {


        await next();

    }
}