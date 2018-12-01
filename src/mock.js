// 引入mockjs
const Mock = require('mockjs');
const Random = Mock.Random;

let login = (data) => {
    if (data.body.username === 'root' && data.body.password === 'root') {
        return {
            code: 200,
            msg: 'success',
            data: Random.string(8)
        }
    } else {
        return {
            code: 1011,
            msg: 'login error'
        }
    }
}

Mock.mock('/login', 'post', login);