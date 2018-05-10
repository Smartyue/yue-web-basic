/**
 * Created by yuanjianxin on 2018/4/26.
 */

const routers=[];

const TestController=require('../controllers/TestController');

routers.push({ path:'/test',method:'get',controller:TestController,func:'test'});


module.exports=routers;