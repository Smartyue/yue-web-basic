/**
 * Created by yuanjianxin on 2018/4/26.
 */

const routers=[];

import TestController from "../controllers/TestController";
import {Test} from "../middlewares";


routers.push({
    path: '/test',
    method: 'get',
    controller: TestController,
    func: 'test',
    middleware: [Test.test1, Test.test2]
});
routers.push({path: '/test1', method: 'get', controller: TestController, func: 'test1'});


module.exports=routers;