/**
 * Created by yuanjianxin on 2018/4/26.
 */
module.exports = () => {

    return async(ctx, next) => {


        await next();

    }
};