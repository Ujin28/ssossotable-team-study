package com.example.viewbinding;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {

    private EditText id;
    private EditText password;
    private Button button;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        id=findViewById(R.id.id);
        password=findViewById(R.id.password);
        button=findViewById(R.id.signin);

        button.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intent=new Intent(getApplicationContext(),InsideActivity.class);
                intent.putExtra("id",id.getText().toString());
                intent.putExtra("password",password.getText().toString());
                startActivity(intent);
            }
        });
    }
}