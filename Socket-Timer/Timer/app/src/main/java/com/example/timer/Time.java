package com.example.timer;

public class Time {
    public int hour;
    public int minute;
    public int second;
    public Time() {
        hour=0;
        minute=0;
        second=0;
    }
    public void setTime(int currTime) {
        hour=currTime/3600;
        currTime%=3600;
        minute=currTime/60;
        currTime%=60;
        second=currTime;
    }
    public String getHour() {
        if(Integer.toString(hour).length()==1)
            return "0"+Integer.toString(hour);
        else
            return Integer.toString(hour);
    }
    public String getMinute() {
        if(Integer.toString(minute).length()==1)
            return "0"+Integer.toString(minute);
        else
            return Integer.toString(minute);
    }
    public String getSecond() {
        if(Integer.toString(second).length()==1)
            return "0"+Integer.toString(second);
        else
            return Integer.toString(second);
    }
    public void resetTime() {
        hour=0;
        minute=0;
        second=0;
    }
}
