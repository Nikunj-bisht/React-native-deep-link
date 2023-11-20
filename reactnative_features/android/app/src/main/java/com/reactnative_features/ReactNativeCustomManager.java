package com.reactnative_features;

import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

import java.util.Map;

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

    @Nullable
    @Override
    public Map getExportedCustomBubblingEventTypeConstants() {
        return MapBuilder.builder().put("click",MapBuilder.of("phasedRegistrationNames",MapBuilder.of("bubbled","onClick"))).build();
    }

    @ReactProp(name = "text")
    public void setText(AdMobView view, @Nullable String text) {
       TextView textView1 = view.findViewById(R.id.randomN);
       textView1.setText(text);
    }

}
