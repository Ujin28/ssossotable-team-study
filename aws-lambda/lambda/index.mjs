import crypto from 'crypto-js';

// MEMO: id: 'aa', password: 'bb' => token
// MARK: db연동 없이 정적 사용자 정보 사용
const userTable = [{
    userToken: '1132bddeedaa94c5ed1a9b33383cb293a9467a3d29d521bed993a98dd9b8a124',
    nickname: 'aa'
}]

export const handler = async(event) => {
    const body = JSON.parse(event.body)
    // MARK: 전송된 id, password값 기반으로 해싱하여 토큰 생성
    const hmac = crypto.algo.HMAC.create(crypto.algo.SHA256, 'secret_key');
    hmac.update(body.id);
    hmac.update(body.password);
    const token = hmac.finalize().toString();
    let nickname = undefined
    userTable.forEach(e => {
        // MAKR: 사용자 정보 안에 해당 토큰값이 존재한다면 정보를 읽어옴
        if(token === e.userToken) {
            nickname = e.nickname
        }
    })
    // MARK: 사용자 정보가 없다면
    if(nickname === undefined) {
        const response = {
            headers: {
                "Access-Control-Allow-Headers" : "Content-Type",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
                'Content-type': 'application/json'
            },
            statusCode: 202,
            body: JSON.stringify({
                token: null,
                nickname: null
            })
        };
        return response;
    }
    // MARK: 사용자 정보가 있다면
    else {
        const response = {
            headers: {
                "Access-Control-Allow-Headers" : "Content-Type",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
                'Content-type': 'application/json'
            },
            statusCode: 201,
            body: JSON.stringify({
                token: token,
                nickname: nickname
            })
        };
        return response;
    }
};
