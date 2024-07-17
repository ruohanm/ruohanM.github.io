//奖项类型，1 表示奖项不分等级，不限数量，2 表示奖项分等级，限制每个等级的数量
const awardsType = 1

//奖项类型是1的时候，使用此配置
var globalkeys = [
	"😎",
	"🙂"
];
//奖项类型是2的时候，使用此配置
var globalkeys2 = {
	"选项1": {
		"awards": "刮",
		"num": 1
	},
	"选项2": {
		"awards": "不刮",
		"num": 20
	}
};