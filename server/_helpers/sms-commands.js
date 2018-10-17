
module.exports = {
    //APN Setting
    APNSetting = (name) => { `APN,APN’${name}#` },
    //Server Setting
    ServerSettingURL = (server, dns, port) => { `${server},1,${dns},${port},0#` },
    ServerSettingIP = (server, ip, port) => { `${server},0,${ip},${port},0#` },
    //Interval time range: 10-18000s. Default as 10s.
    GPRSTimeIntervalSetting = (interval) => { `TIMER,${interval}#` },
    //Add SOS Number
    AddSOSNumber = (no1 = '', no2 = '', no3 = '') => { `SOS,A,${no1},${no2},${no3}3#` },
    // Delete SOS Number
    // 1 SOS,D, Serial No.1, Serial No.2, Serial No.3#
    // 2 SOS,D,Serial No.1#
    // 3 SOS,D,phone number#
    DeleteSOSNumber =(number) => { `SOS,D,${numer}#` },
    // Center Number Setting
    // Only center number can Cut-Off Petro
    CenterNumberSetting=(number) => { `CENTER,A,${number}#` },
    DeleteCenterNumber = (number) => { `CENTER,D#` },
    //Oil Cut-Off
    OilCutOff = () => { 'RELAY,1#' },
    RestoreOil = () => { `RELAY,0#` },
    //Geo-fence - FENCE,ON,0,Latitude,longitude,radius,in/out#
    // FENCE,ON,0,0,0,radius,in/out#
    // If GPS is located, this sms means the latitude and
    // longitude is present location
    GeoFence = (latitude, longitude, radius, type = 'in') => { `FENCE,ON,0,${latitude},${longitude},${radius},${type}#` },
    //Disable Geo-fence
    DisableGeoFence = () => { 'FENCE,OFF#' },
    RebootDevice = () => { 'RESET#' },
    //Time Zone Setting
    // [Time zone(hours) range:0~±12 ; Time
    //     zone(minutes) range:15/30/45]
    TimeZoneSetting =(hours, minutes) => { `GMT,E/W,${hours},${minutes}` },
    //GPRS Status Setting
    // Activate GPRS: GPRSON,1#
    // Disactivate GPRS: GPRSON,0#
    // Default as GPRS ON.
    GPRSStatusSetting =(type = 1) => { ` GPRS: GPRSON,${type}#` },

    // Voice-Monitor Delay
    // Time range: 5s-18s. Default as 10s.
    VoiceMonitorDelay =(time) => { `DELAY,${time}#` },
    FactorySetting = () => { 'FACTORY#' },

    // Alarm GPS Working Time
    //Time range: 1-999mins. Default as 20mins
    AlarmGPSWorkingTime =(time) => { `TIMESET,${time}#` },
    //Sensor Alarm Time Setting
    //Time range:1-60mins. Default as 10mins
    SensorAlarmTimeSetting =(time) => { `DEFENSE,${time}#` },
    //Detect time range:0-300s
    //Alarm time range: 10-300s
    SensorDetectingTime =(detectTime, alarmTime) => { `SENSOR,${detectTime},${alarmTime}#` },
    DisableVibrationAlarm =() => { 'SENSOR,0#' },

    //CHECKING
    CheckingSoftwareVersion = () => { 'VERSION#' },
    CheckingParameters =() => { 'PARAM#' },
    CheckingSimplifyparameters=() => { `SCXSZ#` },
    CheckingGPRSParameter=() => { `GPRSSET#` },
    CheckingLocation =() => { `WHERE#` },//(Get Coordinate)
    CheckingStatus =() => { `STATUS#` },
    CheckingLocationUrl = () => { `URL#` },//(Get Google Map link)
    CheckingGeoFenceStatus =() => { `SEEFENCE#` }
}