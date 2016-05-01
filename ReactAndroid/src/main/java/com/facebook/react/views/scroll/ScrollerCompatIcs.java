package com.facebook.react.views.scroll;

import android.widget.OverScroller;

/**
 * ICS API access for ScrollerCompat
 */
class ScrollerCompatIcs {
    public static float getCurrVelocity(Object scroller) {
        return ((OverScroller) scroller).getCurrVelocity();
    }
}