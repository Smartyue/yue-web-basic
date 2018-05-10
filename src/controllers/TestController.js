/**
 * Created by yuanjianxin on 2018/4/26.
 */
const BaseController=require('./BaseController');
module.exports=class TestController extends BaseController{



    async test(ctx,next){
        ctx.logger.info('==hello test==');

        ctx.result={
            code:200,
            message:'OK'
        };

        await next();
    }


}