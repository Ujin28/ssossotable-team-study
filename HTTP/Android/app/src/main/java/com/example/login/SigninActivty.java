package com.example.login;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Toast;

import com.example.login.databinding.ActivityMainBinding;
import com.example.login.databinding.ActivitySigninBinding;

import com.android.volley.*;
import com.android.volley.toolbox.*;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;

public class SigninActivty extends AppCompatActivity {

    private ActivitySigninBinding binding;

    private RequestQueue queue;
    private final String URL = "http://192.168.35.27:3000/signin";
    private JSONObject userInfoJson;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_signin);

        /**뷰바인딩**/
        binding=ActivitySigninBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());

        /**큐 등록**/
        queue = Volley.newRequestQueue(this);

        /**사용자 정보 저장할 json object**/
        userInfoJson=new JSONObject();

        /**버튼 클릭 이벤트**/
        binding.signin.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                /**StringRequest 사용시**/
                queue.add(getStringRequest());

                /**JsonObejctRequest 사용시**/
//                try {
//                    userInfoJson.put("id",binding.id.getText().toString());
//                    userInfoJson.put("password",binding.password.getText().toString());
//                } catch (JSONException e) { e.printStackTrace(); }
//                queue.add(getJsonObjectRequest());
            }
        });
    }

    /**StringRequest**/
    private StringRequest getStringRequest() {
        return new StringRequest(
                Request.Method.POST,
                URL,
                new Response.Listener<String>() {
                    @Override
                    public void onResponse(String response) {
                        Log.d("volley response",response);
                        switch (response) {
                            case "0":
                                Intent intent = new Intent(getApplicationContext(), MainActivity.class);
                                intent.putExtra("id",binding.id.getText().toString());
                                intent.putExtra("password",binding.password.getText().toString());
                                startActivity(intent);
                                break;
                            case "-1":
                                binding.id.setText("");
                                binding.password.setText("");
                                Toast.makeText(
                                                getApplicationContext(),
                                                "Wrong Id or Password",
                                                Toast.LENGTH_LONG).
                                        show();
                                break;
                        }
                    }
                },
                new Response.ErrorListener() {
                    @Override
                    public void onErrorResponse(VolleyError error) {
                        Log.d("Volley Error",error.toString());
                    }
                }) {
            @Override
            protected Map<String, String> getParams() throws AuthFailureError {
                Map<String, String> params = new HashMap<String, String>();
                Log.d("userinfo",binding.id.getText().toString()+" "+binding.password.getText().toString());
                params.put("id", binding.id.getText().toString());
                params.put("password", binding.password.getText().toString());
                return params;
            }
        };
    }

    /**JsonObjectRequest**/
    private JsonObjectRequest getJsonObjectRequest() {
        return new JsonObjectRequest(
                Request.Method.POST,
                URL,
                userInfoJson,
                new Response.Listener<JSONObject>() {
                    @Override
                    public void onResponse(JSONObject response) {
                        Log.d("volley response", response.toString());
                        try {
                            if(response.getString("result").equals("YES"))
                            {
                                Intent intent = new Intent(getApplicationContext(), MainActivity.class);
                                intent.putExtra("id",binding.id.getText().toString());
                                intent.putExtra("password",binding.password.getText().toString());
                                startActivity(intent);
                            }
                            else
                            {
                                binding.id.setText("");
                                binding.password.setText("");
                                Toast.makeText(
                                                getApplicationContext(),
                                                "Wrong Id or Password",
                                                Toast.LENGTH_LONG).
                                        show();
                            }
                        } catch (JSONException e) { e.printStackTrace(); }
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
}