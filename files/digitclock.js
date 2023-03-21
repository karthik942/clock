function clock()
{
    var date=new Date()
    var hh=date.getHours()
    var mm=date.getMinutes()
    var ss=date.getSeconds()
    var dd=date.getDate()
    var mo=date.getMonth()
    var yy=date.getFullYear()
    var day=date.getDay()
    var am_pm="AM"
    if(hh>=12)
    {
        am_pm="pm"
        if(hh>=13)
        {
            hh-=12
        }
    }
    if (hh==0)
    {
        hh=12;
    }
    if(mo==0)
    {
        mo="Jan"
    }
    else if(mo==1)
    {
        mo="Feb"
    }
    else if(mo==2)
    {
        mo="Mar"
    }
    else if(mo==3)
    {
        mo="Apr"
    }
    else if(mo==4)
    {
        mo="may"
    }
    else if(mo==5)
    {
        mo="Jun"
    }
    else if(mo==6)
    {
        mo="July"
    }
    else if(mo==7)
    {
        mo="Aug"
    }
    else if(mo==8)
    {
        mo="Sep"
    }
    else if(mo==9)
    {
        mo="Oct"
    }
    else if(mo==10)
    {
        mo="Nov"
    }
    else
    {
        mo="dec"

    }
    var fullTime=hh+":"+mm+":"+ss+" "+am_pm
    var fullDate=dd+":"+mo+":"+yy
    switch(day)
    {
        case 0:
            day="sunday"
        break;
        case 1:
            day="Monday"
        break;
        case 2:
            day="Tuesday"
        break;
        case 3:
            day="Wednesday"
        break;
        case 4:
            day="Thursday"
        break;
        case 5:
            day="Friday"
        break;
        case 6:
            day="Saturday"
        break;

    }
    document.getElementById("Date").innerHTML=fullDate
    document.getElementById("Time").innerHTML=fullTime
    document.getElementById("Day").innerHTML=day
    var refreshtheclk=setTimeout(function(){clock()},1000)
}


