console.info('首页');
$('body').prepend('这是来自jQuery');
require('./src/styles/page/index.scss');
module.exports = {
    consolePageName: function(name) {
        return "这是" + name + "页面";
    }
}
