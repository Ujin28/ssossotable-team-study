package com.example.login;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;

import com.example.login.databinding.ActivityMainBinding;

public class MainActivity extends AppCompatActivity {

    private ActivityMainBinding binding;

    /**
     * 메인 화면
     * 인텐트로 넘어온 사용자 정보를 뷰에 등록한다
     * **/
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        binding=ActivityMainBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());

        binding.myid.setText(getIntent().getStringExtra("id"));
        binding.mypassword.setText(getIntent().getStringExtra("password"));
    }
}