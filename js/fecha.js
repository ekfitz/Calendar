
var dia = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

var duJan = 0;
var duFeb = duJan + 31;
var duMar = duFeb + 29;
var duApr = duMar + 31;
var duMay = duApr + 30;
var duJun = duMay + 31;
var duJul = duJun + 30;
var duAug = duJul + 31;
var duSep = duAug + 31;
var duOct = duSep + 30;
var duNov = duOct + 31;
var duDec = duNov + 30;

var d = new Date();
var thisMonth = d.getMonth();
var today = d.getDate();

// x = thisMonth;
function setDays(x) {
  if (x == 0) {
    dtext1.innerHTML = dia[28];
    dtext2.innerHTML = dia[29];
    dtext3.innerHTML = dia[30];
    dtext4.innerHTML = dia[0];
    dtext5.innerHTML = dia[1];
    dtext6.innerHTML = dia[2];
    dtext7.innerHTML = dia[3];
    dtext8.innerHTML = dia[4];
    dtext9.innerHTML = dia[5];
    dtext10.innerHTML = dia[6];
    dtext11.innerHTML = dia[7];
    dtext12.innerHTML = dia[8];
    dtext13.innerHTML = dia[9];
    dtext14.innerHTML = dia[10];
    dtext15.innerHTML = dia[11];
    dtext16.innerHTML = dia[12];
    dtext17.innerHTML = dia[13];
    dtext18.innerHTML = dia[14];
    dtext19.innerHTML = dia[15];
    dtext20.innerHTML = dia[16];
    dtext21.innerHTML = dia[17];
    dtext22.innerHTML = dia[18];
    dtext23.innerHTML = dia[19];
    dtext24.innerHTML = dia[20];
    dtext25.innerHTML = dia[21];
    dtext26.innerHTML = dia[22];
    dtext27.innerHTML = dia[23];
    dtext28.innerHTML = dia[24];
    dtext29.innerHTML = dia[25];
    dtext30.innerHTML = dia[26];
    dtext31.innerHTML = dia[27];
    dtext32.innerHTML = dia[28];
    dtext33.innerHTML = dia[29];
    dtext34.innerHTML = dia[30];
    dtext35.innerHTML = dia[0];
  } else if (x == 1) {
    dtext1.innerHTML = dia[25];
    dtext2.innerHTML = dia[26];
    dtext3.innerHTML = dia[27];
    dtext4.innerHTML = dia[28];
    dtext5.innerHTML = dia[29];
    dtext6.innerHTML = dia[30];
    dtext7.innerHTML = dia[0];
    dtext8.innerHTML = dia[1];
    dtext9.innerHTML = dia[2];
    dtext10.innerHTML = dia[3];
    dtext11.innerHTML = dia[4];
    dtext12.innerHTML = dia[5];
    dtext13.innerHTML = dia[6];
    dtext14.innerHTML = dia[7];
    dtext15.innerHTML = dia[8];
    dtext16.innerHTML = dia[9];
    dtext17.innerHTML = dia[10];
    dtext18.innerHTML = dia[11];
    dtext19.innerHTML = dia[12];
    dtext20.innerHTML = dia[13];
    dtext21.innerHTML = dia[14];
    dtext22.innerHTML = dia[15];
    dtext23.innerHTML = dia[16];
    dtext24.innerHTML = dia[17];
    dtext25.innerHTML = dia[18];
    dtext26.innerHTML = dia[19];
    dtext27.innerHTML = dia[20];
    dtext28.innerHTML = dia[21];
    dtext29.innerHTML = dia[22];
    dtext30.innerHTML = dia[23];
    dtext31.innerHTML = dia[24];
    dtext32.innerHTML = dia[25];
    dtext33.innerHTML = dia[26];
    dtext34.innerHTML = dia[27];
    dtext35.innerHTML = dia[28];
  } else if (x == 2) {
    dtext1.innerHTML = dia[0];
    dtext2.innerHTML = dia[1];
    dtext3.innerHTML = dia[2];
    dtext4.innerHTML = dia[3];
    dtext5.innerHTML = dia[4];
    dtext6.innerHTML = dia[5];
    dtext7.innerHTML = dia[6];
    dtext8.innerHTML = dia[7];
    dtext9.innerHTML = dia[8];
    dtext10.innerHTML = dia[9];
    dtext11.innerHTML = dia[10];
    dtext12.innerHTML = dia[11];
    dtext13.innerHTML = dia[12];
    dtext14.innerHTML = dia[13];
    dtext15.innerHTML = dia[14];
    dtext16.innerHTML = dia[15];
    dtext17.innerHTML = dia[16];
    dtext18.innerHTML = dia[17];
    dtext19.innerHTML = dia[18];
    dtext20.innerHTML = dia[19];
    dtext21.innerHTML = dia[20];
    dtext22.innerHTML = dia[21];
    dtext23.innerHTML = dia[22];
    dtext24.innerHTML = dia[23];
    dtext25.innerHTML = dia[24];
    dtext26.innerHTML = dia[25];
    dtext27.innerHTML = dia[26];
    dtext28.innerHTML = dia[27];
    dtext29.innerHTML = dia[28];
    dtext30.innerHTML = dia[29];
    dtext31.innerHTML = dia[30];
    dtext32.innerHTML = dia[0];
    dtext33.innerHTML = dia[1];
    dtext34.innerHTML = dia[2];
    dtext35.innerHTML = dia[3];
  } else if (x == 3) {
    dtext1.innerHTML = dia[28];
    dtext2.innerHTML = dia[29];
    dtext3.innerHTML = dia[30];
    dtext4.innerHTML = dia[0];
    dtext5.innerHTML = dia[1];
    dtext6.innerHTML = dia[2];
    dtext7.innerHTML = dia[3];
    dtext8.innerHTML = dia[4];
    dtext9.innerHTML = dia[5];
    dtext10.innerHTML = dia[6];
    dtext11.innerHTML = dia[7];
    dtext12.innerHTML = dia[8];
    dtext13.innerHTML = dia[9];
    dtext14.innerHTML = dia[10];
    dtext15.innerHTML = dia[11];
    dtext16.innerHTML = dia[12];
    dtext17.innerHTML = dia[13];
    dtext18.innerHTML = dia[14];
    dtext19.innerHTML = dia[15];
    dtext20.innerHTML = dia[16];
    dtext21.innerHTML = dia[17];
    dtext22.innerHTML = dia[18];
    dtext23.innerHTML = dia[19];
    dtext24.innerHTML = dia[20];
    dtext25.innerHTML = dia[21];
    dtext26.innerHTML = dia[22];
    dtext27.innerHTML = dia[23];
    dtext28.innerHTML = dia[24];
    dtext29.innerHTML = dia[25];
    dtext30.innerHTML = dia[26];
    dtext31.innerHTML = dia[27];
    dtext32.innerHTML = dia[28];
    dtext33.innerHTML = dia[29];
    dtext34.innerHTML = dia[0];
    dtext35.innerHTML = dia[1];
  } else if (x == 4) {
    dtext1.innerHTML = dia[25];
    dtext2.innerHTML = dia[26];
    dtext3.innerHTML = dia[27];
    dtext4.innerHTML = dia[28];
    dtext5.innerHTML = dia[29];
    dtext6.innerHTML = dia[0];
    dtext7.innerHTML = dia[1];
    dtext8.innerHTML = dia[2];
    dtext9.innerHTML = dia[3];
    dtext10.innerHTML = dia[4];
    dtext11.innerHTML = dia[5];
    dtext12.innerHTML = dia[6];
    dtext13.innerHTML = dia[7];
    dtext14.innerHTML = dia[8];
    dtext15.innerHTML = dia[9];
    dtext16.innerHTML = dia[10];
    dtext17.innerHTML = dia[11];
    dtext18.innerHTML = dia[12];
    dtext19.innerHTML = dia[13];
    dtext20.innerHTML = dia[14];
    dtext21.innerHTML = dia[15];
    dtext22.innerHTML = dia[16];
    dtext23.innerHTML = dia[17];
    dtext24.innerHTML = dia[18];
    dtext25.innerHTML = dia[19];
    dtext26.innerHTML = dia[20];
    dtext27.innerHTML = dia[21];
    dtext28.innerHTML = dia[22];
    dtext29.innerHTML = dia[23];
    dtext30.innerHTML = dia[24];
    dtext31.innerHTML = dia[25];
    dtext32.innerHTML = dia[26];
    dtext33.innerHTML = dia[27];
    dtext34.innerHTML = dia[28];
    dtext35.innerHTML = dia[29];
  } else if (x == 5) {
    dtext1.innerHTML = dia[30];
    dtext2.innerHTML = dia[0];
    dtext3.innerHTML = dia[1];
    dtext4.innerHTML = dia[2];
    dtext5.innerHTML = dia[3];
    dtext6.innerHTML = dia[4];
    dtext7.innerHTML = dia[5];
    dtext8.innerHTML = dia[6];
    dtext9.innerHTML = dia[7];
    dtext10.innerHTML = dia[8];
    dtext11.innerHTML = dia[9];
    dtext12.innerHTML = dia[10];
    dtext13.innerHTML = dia[11];
    dtext14.innerHTML = dia[12];
    dtext15.innerHTML = dia[13];
    dtext16.innerHTML = dia[14];
    dtext17.innerHTML = dia[15];
    dtext18.innerHTML = dia[16];
    dtext19.innerHTML = dia[17];
    dtext20.innerHTML = dia[18];
    dtext21.innerHTML = dia[19];
    dtext22.innerHTML = dia[20];
    dtext23.innerHTML = dia[21];
    dtext24.innerHTML = dia[22];
    dtext25.innerHTML = dia[23];
    dtext26.innerHTML = dia[24];
    dtext27.innerHTML = dia[25];
    dtext28.innerHTML = dia[26];
    dtext29.innerHTML = dia[27];
    dtext30.innerHTML = dia[28];
    dtext31.innerHTML = dia[29];
    dtext32.innerHTML = dia[0];
    dtext33.innerHTML = dia[1];
    dtext34.innerHTML = dia[2];
    dtext35.innerHTML = dia[3];
  } else if (x == 6) {
    dtext1.innerHTML = dia[27];
    dtext2.innerHTML = dia[28];
    dtext3.innerHTML = dia[29];
    dtext4.innerHTML = dia[0];
    dtext5.innerHTML = dia[1];
    dtext6.innerHTML = dia[2];
    dtext7.innerHTML = dia[3];
    dtext8.innerHTML = dia[4];
    dtext9.innerHTML = dia[5];
    dtext10.innerHTML = dia[6];
    dtext11.innerHTML = dia[7];
    dtext12.innerHTML = dia[8];
    dtext13.innerHTML = dia[9];
    dtext14.innerHTML = dia[10];
    dtext15.innerHTML = dia[11];
    dtext16.innerHTML = dia[12];
    dtext17.innerHTML = dia[13];
    dtext18.innerHTML = dia[14];
    dtext19.innerHTML = dia[15];
    dtext20.innerHTML = dia[16];
    dtext21.innerHTML = dia[17];
    dtext22.innerHTML = dia[18];
    dtext23.innerHTML = dia[19];
    dtext24.innerHTML = dia[20];
    dtext25.innerHTML = dia[21];
    dtext26.innerHTML = dia[22];
    dtext27.innerHTML = dia[23];
    dtext28.innerHTML = dia[24];
    dtext29.innerHTML = dia[25];
    dtext30.innerHTML = dia[26];
    dtext31.innerHTML = dia[27];
    dtext32.innerHTML = dia[28];
    dtext33.innerHTML = dia[29];
    dtext34.innerHTML = dia[30];
    dtext35.innerHTML = dia[0];
  } else if (x == 7) {
    dtext1.innerHTML = dia[25];
    dtext2.innerHTML = dia[26];
    dtext3.innerHTML = dia[27];
    dtext4.innerHTML = dia[28];
    dtext5.innerHTML = dia[29];
    dtext6.innerHTML = dia[30];
    dtext7.innerHTML = dia[0];
    dtext8.innerHTML = dia[1];
    dtext9.innerHTML = dia[2];
    dtext10.innerHTML = dia[3];
    dtext11.innerHTML = dia[4];
    dtext12.innerHTML = dia[5];
    dtext13.innerHTML = dia[6];
    dtext14.innerHTML = dia[7];
    dtext15.innerHTML = dia[8];
    dtext16.innerHTML = dia[9];
    dtext17.innerHTML = dia[10];
    dtext18.innerHTML = dia[11];
    dtext19.innerHTML = dia[12];
    dtext20.innerHTML = dia[13];
    dtext21.innerHTML = dia[14];
    dtext22.innerHTML = dia[15];
    dtext23.innerHTML = dia[16];
    dtext24.innerHTML = dia[17];
    dtext25.innerHTML = dia[18];
    dtext26.innerHTML = dia[19];
    dtext27.innerHTML = dia[20];
    dtext28.innerHTML = dia[21];
    dtext29.innerHTML = dia[22];
    dtext30.innerHTML = dia[23];
    dtext31.innerHTML = dia[24];
    dtext32.innerHTML = dia[25];
    dtext33.innerHTML = dia[26];
    dtext34.innerHTML = dia[27];
    dtext35.innerHTML = dia[28];
  } else if (x == 8) {
    dtext1.innerHTML = dia[29];
    dtext2.innerHTML = dia[30];
    dtext3.innerHTML = dia[0];
    dtext4.innerHTML = dia[1];
    dtext5.innerHTML = dia[2];
    dtext6.innerHTML = dia[3];
    dtext7.innerHTML = dia[4];
    dtext8.innerHTML = dia[5];
    dtext9.innerHTML = dia[6];
    dtext10.innerHTML = dia[7];
    dtext11.innerHTML = dia[8];
    dtext12.innerHTML = dia[9];
    dtext13.innerHTML = dia[10];
    dtext14.innerHTML = dia[11];
    dtext15.innerHTML = dia[12];
    dtext16.innerHTML = dia[13];
    dtext17.innerHTML = dia[14];
    dtext18.innerHTML = dia[15];
    dtext19.innerHTML = dia[16];
    dtext20.innerHTML = dia[17];
    dtext21.innerHTML = dia[18];
    dtext22.innerHTML = dia[19];
    dtext23.innerHTML = dia[20];
    dtext24.innerHTML = dia[21];
    dtext25.innerHTML = dia[22];
    dtext26.innerHTML = dia[23];
    dtext27.innerHTML = dia[24];
    dtext28.innerHTML = dia[25];
    dtext29.innerHTML = dia[26];
    dtext30.innerHTML = dia[27];
    dtext31.innerHTML = dia[28];
    dtext32.innerHTML = dia[29];
    dtext33.innerHTML = dia[0];
    dtext34.innerHTML = dia[1];
    dtext35.innerHTML = dia[2];
  } else if (x == 9) {
    dtext1.innerHTML = dia[28];
    dtext2.innerHTML = dia[29];
    dtext3.innerHTML = dia[0];
    dtext4.innerHTML = dia[1];
    dtext5.innerHTML = dia[2];
    dtext6.innerHTML = dia[3];
    dtext7.innerHTML = dia[4];
    dtext8.innerHTML = dia[5];
    dtext9.innerHTML = dia[6];
    dtext10.innerHTML = dia[7];
    dtext11.innerHTML = dia[8];
    dtext12.innerHTML = dia[9];
    dtext13.innerHTML = dia[10];
    dtext14.innerHTML = dia[11];
    dtext15.innerHTML = dia[12];
    dtext16.innerHTML = dia[13];
    dtext17.innerHTML = dia[14];
    dtext18.innerHTML = dia[15];
    dtext19.innerHTML = dia[16];
    dtext20.innerHTML = dia[17];
    dtext21.innerHTML = dia[18];
    dtext22.innerHTML = dia[19];
    dtext23.innerHTML = dia[20];
    dtext24.innerHTML = dia[21];
    dtext25.innerHTML = dia[22];
    dtext26.innerHTML = dia[23];
    dtext27.innerHTML = dia[24];
    dtext28.innerHTML = dia[25];
    dtext29.innerHTML = dia[26];
    dtext30.innerHTML = dia[27];
    dtext31.innerHTML = dia[28];
    dtext32.innerHTML = dia[29];
    dtext33.innerHTML = dia[30];
    dtext34.innerHTML = dia[0];
    dtext35.innerHTML = dia[1];
  } else if (x == 11) {
    dtext1.innerHTML = dia[26];
    dtext2.innerHTML = dia[27];
    dtext3.innerHTML = dia[28];
    dtext4.innerHTML = dia[29];
    dtext5.innerHTML = dia[30];
    dtext6.innerHTML = dia[0];
    dtext7.innerHTML = dia[1];
    dtext8.innerHTML = dia[2];
    dtext9.innerHTML = dia[3];
    dtext10.innerHTML = dia[4];
    dtext11.innerHTML = dia[5];
    dtext12.innerHTML = dia[6];
    dtext13.innerHTML = dia[7];
    dtext14.innerHTML = dia[8];
    dtext15.innerHTML = dia[9];
    dtext16.innerHTML = dia[10];
    dtext17.innerHTML = dia[11];
    dtext18.innerHTML = dia[12];
    dtext19.innerHTML = dia[13];
    dtext20.innerHTML = dia[14];
    dtext21.innerHTML = dia[15];
    dtext22.innerHTML = dia[16];
    dtext23.innerHTML = dia[17];
    dtext24.innerHTML = dia[18];
    dtext25.innerHTML = dia[19];
    dtext26.innerHTML = dia[20];
    dtext27.innerHTML = dia[21];
    dtext28.innerHTML = dia[22];
    dtext29.innerHTML = dia[23];
    dtext30.innerHTML = dia[24];
    dtext31.innerHTML = dia[25];
    dtext32.innerHTML = dia[26];
    dtext33.innerHTML = dia[27];
    dtext34.innerHTML = dia[28];
    dtext35.innerHTML = dia[29];
  }
}
