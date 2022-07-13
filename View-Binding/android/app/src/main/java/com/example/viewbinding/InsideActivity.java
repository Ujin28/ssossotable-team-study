package com.example.viewbinding;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;

import com.example.viewbinding.databinding.ActivityInsideBinding;
import com.example.viewbinding.databinding.ActivityMainBindingBinding;

public class InsideActivity extends AppCompatActivity {

    private ActivityInsideBinding binding;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_inside);

        binding = ActivityInsideBinding.inflate(getLayoutInflater()); // 1
        setContentView(binding.getRoot()); // 2

        binding.inid.setText(getIntent().getStringExtra("id"));
        binding.inpassword.setText(getIntent().getStringExtra("password"));
    }
}