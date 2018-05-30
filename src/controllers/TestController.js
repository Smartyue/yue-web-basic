/**
 * Created by yuanjianxin on 2018/4/26.
 */
import {Test} from "../annotation";
import BaseController from "./BaseController";
export default class TestController extends BaseController {


    @Test
    async test(ctx,next){
        ctx.logger.info('==hello test==');

        ctx.result={
            code:200,
            message:'OK'
        };

        await next();
    }

    async test1(ctx, next) {
        ctx.logger.info('==hello test1==');

        ctx.result = {
            code: 200,
            message: 'OK'
        };

        await next();
    }


}