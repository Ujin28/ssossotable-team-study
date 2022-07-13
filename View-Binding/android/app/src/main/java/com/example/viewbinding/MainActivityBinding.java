package com.example.viewbinding;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

import com.example.viewbinding.databinding.ActivityMainBindingBinding;

public class MainActivityBinding extends AppCompatActivity {

    /**1. 바인딩 객체 생성**/
    private ActivityMainBindingBinding binding;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main_binding);

        /**2.바인딩 객체를 해당 액티비티에 등록함**/
        binding = ActivityMainBindingBinding.inflate(getLayoutInflater()); // 1
        setContentView(binding.getRoot()); // 2

        /**3. 레이아웃 객체가 아닌 바인딩을 통해 액티비티에 접근**/
        binding.signinBindig.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent=new Intent(getApplicationContext(),InsideActivity.class);
                intent.putExtra("id",binding.idBindig.getText().toString());
                intent.putExtra("password",binding.passwordBindig.getText().toString());
                startActivity(intent);
            }
        });
    }
}