package com.cashair.sms

import android.annotation.TargetApi
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.nfc.Tag
import android.os.Build
import android.os.Bundle
import android.provider.Telephony
import android.telephony.SmsMessage
import android.util.Log

/**
 * Created by andeladeveloper on 26/08/2018.
 */

class SmsReceiver : BroadcastReceiver() {

    @TargetApi(19)
    override fun onReceive(context: Context?, intent: Intent?) {
        var smsSender: String
        var smsBody = ""
        if (intent?.action == Telephony.Sms.Intents.SMS_RECEIVED_ACTION) {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.KITKAT) {
                for (smsMessage: SmsMessage in
                Telephony.Sms.Intents.getMessagesFromIntent(intent)) {
                    smsSender = smsMessage.displayOriginatingAddress
                    smsBody += smsMessage.messageBody
                }
            } else {
                val smsBundle: Bundle = intent.extras
                if (smsBundle != null) {
                    val pdus = smsBundle.get("pdus") as Array<Any>
                    if (pdus == null) {
                        // Display some error to the user
//                        Log.e(TAG,"SmsBundle had no pdus key")
                        return
                    }
                    val messages = arrayOfNulls<SmsMessage>(pdus.size)
                    for (i in messages.indices) {
                        messages[i] = SmsMessage.createFromPdu(pdus[i] as ByteArray)
                        smsBody += messages[i]?.messageBody
                    }
//                    smsSender = messages[0].originatingAddress
                }
            }
        }
    }
}