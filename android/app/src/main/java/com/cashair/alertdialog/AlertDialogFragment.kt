package com.cashair.alertdialog

import android.app.Dialog
import android.app.DialogFragment
import android.os.Bundle
import android.support.v4.content.ContextCompat
import android.support.v7.app.AlertDialog
import android.widget.ImageView
import android.widget.TextView
import com.cashair.R

/**
 * AlertDialogFragment create custom dialog view
 * Created by Akande Oluwatomi Paul on 29/04/2018.
 */

class AlertDialogFragment: DialogFragment() {

    override fun onCreateDialog(savedInstanceState: Bundle?): Dialog {
        // Initialize the alert dialog builder
        val dialogBuilder = AlertDialog.Builder(activity)

        // Get the Status argument
        val status = arguments.getString("Status")

        // Call the setContentView and pass it the status
        setContentView(status, dialogBuilder)

        // Create the AlertDialog object and return it
        return dialogBuilder.create()
    }

    private fun setContentView(Status: String, dialogBuilder: AlertDialog.Builder) {
        // Get the layout inflater
        val inflater = activity.layoutInflater

        // Inflate the layout for the dialog
        val view = inflater.inflate(R.layout.dialog_success, null)

        // Set the image and text in layout based on status
        val textView = view.findViewById(R.id.alertText) as TextView
        val imageView = view.findViewById(R.id.alertImage) as ImageView

        when (Status) {
            "failure" -> {
                imageView.setImageDrawable(
                        ContextCompat.getDrawable(activity, R.drawable.cross)
                )
                imageView.contentDescription = getString(R.string.red_cross)
                textView.text = getString(R.string.failure)
                textView.textSize = 24f
            }
            "success" -> {
                imageView.setImageDrawable(
                        ContextCompat.getDrawable(activity, R.drawable.checkmark)
                )
                imageView.contentDescription = getString(R.string.green_check)
                textView.text = getString(R.string.success)
            }
            else -> {
                throw IllegalArgumentException("Status must be failure or success")
            }
        }

        // Set the view and cancellable option for the dialog
        dialogBuilder.setView(view)
                .setCancelable(true)
    }
}
