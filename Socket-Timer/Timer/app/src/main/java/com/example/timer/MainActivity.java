package com.example.timer;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.AppCompatTextView;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.TextView;

import com.example.timer.databinding.ActivityMainBinding;

import java.net.URISyntaxException;

import io.socket.client.IO;
import io.socket.client.Socket;
import io.socket.emitter.Emitter;

public class MainActivity extends AppCompatActivity {

    ActivityMainBinding binding;
    private boolean flag=false;
    /**소켓 연결**/
    private Socket mSocket;
    {
        try {
            mSocket = IO.socket("http://192.168.35.27:3000");
        } catch (URISyntaxException e) {}
    }
    /**시간 객체 초기화**/
    private Time time;
    {
        time=new Time();
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        /**뷰 바인딩 등록**/
        binding = ActivityMainBinding.inflate(getLayoutInflater());
        View view = binding.getRoot();
        setContentView(view);

        /**소켓 이벤트 리스너 등록**/
        mSocket.on("timer start", timerStart);
        mSocket.connect();

        /**
         * 타이머 시작 버튼 클릭
         * 시작 버튼 클릭 시 타이머 시작 이벤트 emit
         * 중지 버튼 클릭 시 타이머 종료 이벤트 emit
         * **/
        binding.start.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(!flag) {
                    // 타이머 시작 이벤트
                    mSocket.emit("timer start");
                    flag=true;
                    binding.start.setText("STOP");
                }
                else
                {
                    // 타이머 종료 이벤트
                    mSocket.emit("timer stop");
                    flag=false;
                    binding.start.setText("START");

                    // 시간 객체 초기화
                    time.resetTime();
                    binding.hour.setText("00");
                    binding.minute.setText("00");
                    binding.second.setText("00");
                }

            }
        });
    }

    /**어플리케이션 종료**/
    @Override
    public void onDestroy() {
        super.onDestroy();

        // 소켓 연결 해
        mSocket.disconnect();
        // 이벤트 리스닝 종료
        mSocket.off("timer s제tart");
        mSocket.off("timer stop");
    }

    /**타이머 시작 이벤트 리스너**/
    private Emitter.Listener timerStart = new Emitter.Listener() {
        @Override
        public void call(final Object... args) {
            AppCompatTextView hour=findViewById(R.id.hour);
            AppCompatTextView minute=findViewById(R.id.minute);
            AppCompatTextView second=findViewById(R.id.second);
            runOnUiThread(new Runnable() {
                @Override
                public void run() {
                    time.setTime(Integer.parseInt(args[0].toString()));
                    hour.setText(time.getHour());
                    minute.setText(time.getMinute());
                    second.setText(time.getSecond());
                }
            });
        }
    };
}