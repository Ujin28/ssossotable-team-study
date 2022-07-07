package com.example.login;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;
import android.widget.Toast;

import com.android.volley.*;
import com.android.volley.toolbox.*;

public class SampleRequest extends AppCompatActivity implements View.OnClickListener {

    private RequestQueue requestQueue;
    private StringRequest stringRequest;
    private final String URL="http://google.com";

    private TextView textView;
    private Button button;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_sample_request);

        textView=findViewById(R.id.get);
        button=findViewById(R.id.reqbtn);

        requestQueue= Volley.newRequestQueue(this);

        stringRequest=new StringRequest(
                Request.Method.GET,
                URL,
                new Response.Listener<String>() {
                    @Override
                    public void onResponse(String response) {
                        textView.setText(response.substring(200));
                    }
                },
                new Response.ErrorListener() {
                    @Override
                    public void onErrorResponse(VolleyError error) {
                        Log.d("Volley Error",error.toString());
                    }
                }
        );
    }

    @Override
    public void onClick(View view) {
        switch (view.getId()) {
            case R.id.reqbtn:
                requestQueue.add(stringRequest);
                break;
            default:
                break;
        }
    }
}