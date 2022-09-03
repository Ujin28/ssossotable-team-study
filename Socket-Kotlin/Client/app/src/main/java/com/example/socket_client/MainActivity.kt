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
    private var mBinding: ActivityMainBinding? = null
    private val binding get() = mBinding!!

    private lateinit var mSocket: Socket
    private var authInfo: JSONObject = JSONObject()

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        mBinding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        try { mSocket = IO.socket("http://192.168.35.27:3000") }
        catch (e: URISyntaxException) { e.printStackTrace() }

        mSocket.on("auth message",authMessage)
        mSocket.connect()

        binding.et.error=null;

        binding.btn.setOnClickListener {

            if(binding.etMain.text.toString().isNotEmpty()) {
                authInfo.putOpt("authCode",binding.etMain.text)
                mSocket.emit("auth message",authInfo)
            }
        }
    }

    private val authMessage =
        Emitter.Listener { args ->
            runOnUiThread(Runnable {
                val data = args[0] as JSONObject
                try {
                    if(data.getBoolean("success")) {
                        startActivity(Intent(this, Success::class.java))
                        binding.et.error = null
                    }
                    else {
                        binding.et.error="Auth fail";
                        binding.etMain.setText("")

                    }
                } catch (e: JSONException) { return@Runnable }
            })
        }
}