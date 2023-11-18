package com.reactnative_features;

import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

public class ReactNativeCustomManager extends SimpleViewManager<AdMobView> {
    private static String name = "ReactNativeI";
    ReactApplicationContext reactApplicationContext;
    TextView textView ;
    ReactNativeCustomManager(ReactApplicationContext reactApplicationContext){

    }

    @NonNull
    @Override
    public String getName() {
        return name ;
    }


    @Override
    public AdMobView createViewInstance(ThemedReactContext context) {
        AdMobView adMobView = new AdMobView(context);
        return adMobView;
    }

    @ReactProp(name = "text")
    public void setText(AdMobView view, @Nullable String text) {
        view.setText(text);
    }

}
