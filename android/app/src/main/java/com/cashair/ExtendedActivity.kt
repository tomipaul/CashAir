package com.cashair

import android.app.Activity
import android.content.Context
import android.content.Intent
import android.net.Uri
import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.ReactContext

/**
 * Created by andeladeveloper on 28/05/2018.
 */
class ExtendedActivity : ReactActivity() {

    companion object {
        lateinit var callback: Callback

        fun newIntent(context: Context, cb: Callback): Intent {
            val intent = Intent(context, ExtendedActivity::class.java)
            callback = cb
            return intent
        }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        val ussd = "*123" + Uri.encode("#")
        val intent = Intent(Intent.ACTION_CALL, Uri.parse("tel: $ussd"))
        val requestCode = 10
        startActivityForResult(intent, requestCode)
    }

    private fun saveTransaction() {
        callback.invoke()
    }

    override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {
        super.onActivityResult(requestCode, resultCode, data)
        if (requestCode == 10) {
            saveTransaction()
            finish()
        } else {
            finish()
        }
    }
}