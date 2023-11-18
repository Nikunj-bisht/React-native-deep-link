package com.reactnative_features;
import android.content.Context;
import android.graphics.Color;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.FrameLayout;
import android.widget.TextView;
import androidx.annotation.NonNull;

public class AdMobView extends FrameLayout {

    private TextView textView;

    public AdMobView(@NonNull Context context) {
        super(context);
        this.setPadding(16,16,16,16);
        this.setBackgroundColor(Color.parseColor("#33B5FF"));

        this.textView = new TextView(context);
        LayoutInflater layoutInflater = LayoutInflater.from(context);
        View view = layoutInflater.inflate(R.layout.custom,null);
        this.addView(view);
    }

    public void setText(String text) {
        this.textView.setText(text);
    }
}