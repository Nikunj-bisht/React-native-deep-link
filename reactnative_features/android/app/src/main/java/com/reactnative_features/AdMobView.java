package com.reactnative_features;
import android.content.Context;
import android.graphics.Color;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.Button;
import android.widget.FrameLayout;
import android.widget.TextView;
import androidx.annotation.NonNull;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.uimanager.events.RCTEventEmitter;

public class AdMobView extends FrameLayout {

    private TextView textView;

    public AdMobView(@NonNull Context context) {
        super(context);
        this.setPadding(16,16,16,16);
        this.setBackgroundColor(Color.parseColor("#33B5FF"));

        this.textView = new TextView(context);
        LayoutInflater layoutInflater = LayoutInflater.from(context);
        View view = layoutInflater.inflate(R.layout.custom,null);
        Button button = view.findViewById(R.id.button);
        button.setOnClickListener(new OnClickListener() {
            @Override
            public void onClick(View view) {
              buttonClick();
            }
        });
        this.addView(view);
    }
    public void buttonClick(){
        WritableMap writableMap = Arguments.createMap();
        ReactContext reactContext = (ReactContext) getContext();
        reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(getId(),"click",writableMap);
    }

    public void setText(String text) {
        this.textView.setText(text);
    }
}