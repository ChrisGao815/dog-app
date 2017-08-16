var Mock = require('mockjs');
var Random = Mock.Random;
module.exports  = function(){
	return{
		"text":Mock.mock({
			"us|2":[{
			'name': '@cname',   //中文名称
            'age|1-100': 100,   //100以内随机整数
            'birthday': '@date("2017-07-dd")',  //日期
            'city': '@city(true)',
            'email':'@email',
            'id':'@id',
            'image':'@Image(200x200,@hex())'
			}]
			

		})
	}
}