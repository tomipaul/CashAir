package com.cashair.alertdialog

import android.app.Activity
import android.content.Intent
import android.net.Uri
import android.os.Bundle
import com.cashair.ExtendedActivity
import com.facebook.react.bridge.*


/**
 * AlertModule expose native module
 * Created by tomipaul on 29/04/2018.
 */

class AlertModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    var callback: Callback? = null

    private val mActivityEventListener: ActivityEventListener = object: BaseActivityEventListener(){
        override fun onActivityResult(activity: Activity, requestcode: Int, resultcode: Int, data: Intent?) {
            if (requestcode == 10) {
                callback?.invoke()
            }
            callback = null
        }
    }

    init {
        reactContext.addActivityEventListener(mActivityEventListener)
    }

    override fun getName(): String {
        return "AlertDialog"
    }

    @ReactMethod
    fun show(Status: String) {
        // Set up bundle to store arguments
        val bundle = Bundle()
        bundle.putString("Status", Status)

        // Get current activity
        val activity = currentActivity

        // Show fragment if activity is not null
        if (activity != null) {
            val fragment = AlertDialogFragment()
            fragment.arguments = bundle
            val fragManager = activity.fragmentManager
            fragment.show(fragManager,"alerts")
        }
    }

    @ReactMethod
    fun initiateAirtimeTransfer(callback: Callback) {
        this.callback = callback
        val ussd = "*123" + Uri.encode("#")
        val intent = Intent(Intent.ACTION_CALL, Uri.parse("tel: $ussd"))
        val requestCode = 10
        currentActivity?.startActivityForResult(intent, requestCode)
//        val intent = ExtendedActivity.newIntent(reactApplicationContext, callback)
//        currentActivity?.startActivity(intent)
    }
}

