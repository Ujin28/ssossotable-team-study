package com.example.socket_client

import android.content.Intent
import android.os.Bundle
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import com.example.socket_client.databinding.ActivityMainBinding
import io.socket.client.IO
import io.socket.client.Socket
import io.socket.emitter.Emitter
import org.json.JSONException
import org.json.JSONObject
import java.net.URISyntaxException


class MainActivity : AppCompatActivity() {
    /**뷰 바인딩**/
    private var mBinding: ActivityMainBinding? = null
    private val binding get() = mBinding!!

    /**소켓 객체**/
    private lateinit var mSocket: Socket

    /**서버에 보낼 정보(JSON형식)**/
    private var authInfo: JSONObject = JSONObject()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        /**뷰 바인딩**/
        mBinding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        /**소켓 연결(로컬서버)**/
        try { mSocket = IO.socket("http://192.168.35.27:3000") }
        catch (e: URISyntaxException) { e.printStackTrace() }
        // 소켓 이벤트 등록
        mSocket.on("auth message",authMessage)
        // 소켓 연결
        mSocket.connect()

        /**버튼 클릭 시 로그인 이벤트**/
        binding.btn.setOnClickListener {
            // EditText가 비어있지 않다면
            if(binding.etMain.text.toString().isNotEmpty()) {
                // 서버에 정보를 emit한다
                authInfo.putOpt("authCode",binding.etMain.text)
                /**event emit**/
                mSocket.emit("auth message",authInfo)
            }
        }
    }

    /**
     * 서버에서 오는 이벤트 콜백
     * 상단의 mSocket.on("auth message",authMessage)과 연동되는 콜백 코드
     * event on
     * **/
    private val authMessage =
        Emitter.Listener { args ->
            runOnUiThread(Runnable {
                val data = args[0] as JSONObject
                try {
                    // 받아온 값이 성공이라면 intent
                    if(data.getBoolean("success")) {
                        startActivity(Intent(this, Success::class.java))
                        binding.et.error = null
                    }
                    // 받아온 값이 실패라면 에러 메세지를 띄운다
                    else {
                        binding.et.error="Auth fail";
                        binding.etMain.setText("")
                    }
                } catch (e: JSONException) { return@Runnable }
            })
        }
}