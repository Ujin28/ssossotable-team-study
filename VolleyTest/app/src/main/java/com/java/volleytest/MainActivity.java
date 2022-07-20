package com.java.volleytest;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

public class MainActivity extends AppCompatActivity {
    /**
     * volley의 JsonObjectRequest를 통해 서버와 통신하세요
     * 1. 숫자 두 개를 입력받으세요
     * 2. 숫자 두 개를 각각 jsonobject에 key:value 형태로 저장하세요 key값의 이름은 num1, num2
     * > {num1:value, num2:value}
     * 3. jsonobject를 POST형식으로 request하세요
     * > 경로: http://13.58.48.132:3000/test
     * 4. 반환되어오는 resonese 값을 xml 파일 최 하단 textview에 보이도록 하세요
     * > 두 수의 합이 양수라면 true, 음수라면 false가 반환돼요
     * > 내부 구조가 궁금하다면 testapp.js파일 참조하세요
     * 5. xml객체 접근 시 뷰 바인딩 사용하세요
     * **/
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
}