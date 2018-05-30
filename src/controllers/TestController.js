/**
 * Created by yuanjianxin on 2018/4/26.
 */
import {Test} from "../annotation";
const BaseController=require('./BaseController');
module.exports=class TestController extends BaseController{


    @Test
    async test(ctx,next){
        ctx.logger.info('==hello test==');

        ctx.result={
            code:200,
            message:'OK'
        };

        await next();
    }


}