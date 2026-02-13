package com.example.g5labaya

import android.app.Activity
import android.content.Intent
import android.os.Bundle
import android.util.Log
import android.widget.Button
import android.widget.EditText
import android.widget.Toast

class LoginActivity : Activity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_login)

        val edittext_username = findViewById<EditText>(R.id.edittext_username)
        val edittext_password = findViewById<EditText>(R.id.edittext_password)

        val button_login = findViewById<Button>(R.id.button_login)
        button_login.setOnClickListener {
            val username = edittext_username.text
            val password = edittext_password.text

            if (username.isNullOrEmpty() || password.isNullOrEmpty()) {
                Toast.makeText(this, "Username and Password cannot be empty", Toast.LENGTH_LONG).show()
                return@setOnClickListener
            }

            val intent = Intent(this, DashboardActivity::class.java)
            startActivity(intent)
        }

        val button_register = findViewById<Button>(R.id.button_register)
        button_register.setOnClickListener {
            Log.e("Login", "Clicked ")

            val intent = Intent(this, RegisterActivity::class.java)
            startActivity(intent)
        }

    }
}