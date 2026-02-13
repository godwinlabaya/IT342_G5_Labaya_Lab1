package com.example.g5labaya

import android.app.Activity
import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.widget.Button

class RegisterActivity : Activity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_register)

        val button_login = findViewById<Button>(R.id.button_login)
        button_login.setOnClickListener {
            Log.e("Register", "Clicked ")

            val intent = Intent(this, LoginActivity::class.java)
            startActivity(intent)
        }
    }
}